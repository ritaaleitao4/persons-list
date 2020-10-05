import React from 'react';
import { Draggable } from 'react-beautiful-dnd';
import OfficeIcon from '../../assets/svg/office-icon.svg';
import TrashIcon from '../../assets/svg/trash.svg';
import { PersonItem, InfoContainer, ImgContainer, ProfilePicture, Delete } from './styles';

const Person = (props) => {
  const { 
    picture_id,
    name,
    draggableId,
    disabled,
    index,
    openModal,
    clickDelete,
    id
  } = props;
  const group = props.d44957aab8d5be8fb653568939c0ee954f6d8f28;

  return (
    <Draggable
      draggableId={draggableId}
      index={index}
      isDragDisabled={disabled}
    >
      {(provided) => (
        <PersonItem
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          onClick={() => openModal(index)}
        >
          <InfoContainer>
            <h4>
              {name}
            </h4>
            <p>
              <img
                src={OfficeIcon}
                alt="icon-building"
              />
              {group}
            </p>
          </InfoContainer>
          <ImgContainer>
            <ProfilePicture>
              {picture_id ? (
                <img
                  src={picture_id.pictures['128']}
                  alt={`cover-${picture_id}`}
                />
              ) : (
                <span>
                  {name.split(' ').map((n) => n[0]).join('')}
                </span>
              )}
            </ProfilePicture>
            <Delete
              className="delete"
              src={TrashIcon}
              alt="icon-delete"
              onClick={(e) => clickDelete(e, id)}
            />
          </ImgContainer>
        </PersonItem>
      )}
    </Draggable>
  );
};

export default Person;
