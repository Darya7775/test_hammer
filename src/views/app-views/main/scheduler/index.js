import React, { useRef, useState, useCallback } from "react";
import { Stage, Layer, Image } from 'react-konva';
import { Form, Button } from 'antd';
import useImage from 'use-image';
import { schedulerData } from "mock/data/scheduler-data";
import { jsPDF } from "jspdf";
import { useEffect } from "react";
import * as S from "./styled.js";

let saveLayer = {};

const URLImage = ({ image, index }) => {
    const [img] = useImage(image.src);
    let historyStep = 0;

    function handleDragEnd (e) {
        saveLayer[index].x = e.target.x();
        saveLayer[index].y = e.target.y();

        historyStep += 1;
    };

    return (
      <Image
        image={img}
        x={image.x}
        y={image.y}
        draggable
        onDragEnd={handleDragEnd}
      />
    );
  };

function Scheduler() {

    const dragUrl = useRef();
    const stageRef = useRef();
    const [images, setImages] = useState([]);
    const [name, setName] = useState('');
    const [listArrangements, setListArrangements] = useState([]);
    const [count, setCount] = useState(listArrangements.length);

    useEffect(() => {
      if(localStorage.getItem('image')) {
        const obImage = JSON.parse(localStorage.getItem('image'));
        setListArrangements(Object.keys(obImage));
      }
    }, [count]);

    const callbacks = {
      onNameChange: useCallback(e => setName(e.target.value), []),
      // сохранение расстановки в localStorage
      onSave: useCallback((name) => {
            if(!localStorage.getItem('image')) {
                const obImage = {};
                obImage[name] = saveLayer;
                localStorage.setItem('image', JSON.stringify(obImage));
            } else {
                const obImage = JSON.parse(localStorage.getItem('image'));
                obImage[name] = saveLayer;
                localStorage.setItem('image', JSON.stringify(obImage));
            }
            saveLayer = {};
            setImages([]);
            setName('');
            setCount(count + 1);
      }, []),
      // сохранение в файл PDF
      onSaveToPDF: useCallback(() => {
            const pdf = new jsPDF('l', 'px', [stageRef.current.width(), stageRef.current.height()]);

            pdf.addImage(
              stageRef.current.toDataURL({ pixelRatio: 2 }),
              0,
              0,
              stageRef.current.width(),
              stageRef.current.height()
            );

            pdf.save('canvas.pdf');
      }, []),
      // открытие расстановки из сохраненного списка
      onOpenSave: useCallback((arrangement) => {
            const image = JSON.parse(localStorage.getItem('image'));
            const ert = image[arrangement];
            setImages(Object.values(ert));
            saveLayer = ert;
      }, []),
        // удаление расстановки из списка
      onDelete: useCallback((nameDelete) => {
            const obImage = JSON.parse(localStorage.getItem('image'));
            delete obImage[nameDelete];
            localStorage.setItem('image', JSON.stringify(obImage));
            setCount(count - 1);
      }, [])
    };

  return(
    <S.SchedulerStyle>
      <S.Wrapper>

        <S.InputWrapper>
          <label htmlFor="name">Сonstellation name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={callbacks.onNameChange}
          />
        </S.InputWrapper>
        <S.Wrapper>
          <S.WrapButton>
            <Button type="primary" htmlType="button" onClick={() => callbacks.onSave(name)}>Save</Button>
            <Button type="primary" htmlType="button" onClick={callbacks.onSaveToPDF}>Save as PDF</Button>
          </S.WrapButton>
            <S.ListSavedSpreads>saved spreads
              {listArrangements.length ? // список сохраненных расстановок
                listArrangements.map((item, index) => (
                  <S.Wrapper key={index}>
                    <Button type="link" htmlType="button" onClick={() => callbacks.onOpenSave(item)}>{item}</Button>
                    <Button danger type="primary" htmlType="button" onClick={() => callbacks.onDelete(item)}>Delete</Button>
                  </S.Wrapper>
                ))
                : "no saved layoutl"
              }
          </S.ListSavedSpreads>
        </S.Wrapper>
        <S.ListItem>
          {schedulerData.map((item, index) => (
            <S.ItemImage key={index}>
              <img
                alt={item.alt}
                src={item.src}
                width={"100px"}
                height={"100px"}
                draggable="true"
                onDragStart={(e) => {
                  dragUrl.current = e.target.src;
                  dragUrl.id = index;
                }}
              />
            </S.ItemImage>
          ))}
        </S.ListItem>
      </S.Wrapper>
      <div
        onDrop={(e) => {
          e.preventDefault();
          stageRef.current.setPointersPositions(e);

          setImages(
            images.concat([
              {
                ...stageRef.current.getPointerPosition(),
                src: dragUrl.current,
              },
            ])
          );
          // сохранение выбранного элемента и его координат
          saveLayer[images.length] = {};
          saveLayer[images.length].x = stageRef.current.getPointerPosition().x;
          saveLayer[images.length].y = stageRef.current.getPointerPosition().y;
          saveLayer[images.length].src = dragUrl.current;
        }}
        onDragOver={(e) => e.preventDefault()}
      >
        <Stage
          width={window.innerWidth}
          height={window.innerHeight}
          style={{ border: '1px solid grey', overflowX: 'hidden' }}
          ref={stageRef}
        >
          <Layer>
            {images.map((image, index) => { // отрисовка элементов на холсте
              return <URLImage key={index} image={image} index={index}/>;
            })}
          </Layer>
        </Stage>
      </div>
    </S.SchedulerStyle>
  );
}

export default Scheduler;
