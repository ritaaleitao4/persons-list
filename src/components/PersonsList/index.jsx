import React, { useState } from 'react';
import {
  DragDropContext,
  Droppable,
} from 'react-beautiful-dnd';
import Person from '../Person/index';
import Loading from '../Loading/index';
import Popup from '../Popup/index';
import {
  BtnLoadMore,
  NoData,
} from './styles';
import {
  ImgContainer,
  TableInfo,
} from '../Popup/styles';

const PersonsList = (props) => {
  const {
    filterItems,
    itemsToShow,
    persons,
    loading,
    orderList,
    clickDelete,
    loadMore,
  } = props;

  const [showModal, setShowModal] = useState(false);
  const [selectedItem, setSelectedItem] = useState(0);
  const personsToDisplay = [...filterItems].splice(0, itemsToShow);
  const isDragDisabled = persons.length > filterItems.length

  function openModal(index) {
    setShowModal(true);
    setSelectedItem(index);
  }

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <>
          {personsToDisplay.length ? (
            <>
              <Popup
                open={showModal}
                onClose={() => setShowModal(false)}
                title="Person Information"
              >
                <ImgContainer>
                  {filterItems[selectedItem].picture_id ? (
                    <img 
                      src={filterItems[selectedItem].picture_id.pictures['128']}
                      alt={`cover-${filterItems[selectedItem].picture_id}`}
                    />
                  ) : (
                    <span>
                      {filterItems[selectedItem].name ? filterItems[selectedItem].name.split(" ").map((n) => n[0]).join('') : ''}
                    </span>
                  )}
                </ImgContainer>
                <h4>{filterItems[selectedItem].name}</h4>
                {filterItems[selectedItem].phone && (
                  <p>{filterItems[selectedItem].phone[0].value}</p>
                )}
                <hr />
                <TableInfo>
                  <tbody>
                    <tr>
                      <td>Email</td>
                      <td>{filterItems[selectedItem].email ? filterItems[selectedItem].email[0].value : '-'}</td>
                    </tr>
                    <tr>
                      <td>Organization</td>
                      <td>{filterItems[selectedItem]['d44957aab8d5be8fb653568939c0ee954f6d8f28'] ? filterItems[selectedItem]['d44957aab8d5be8fb653568939c0ee954f6d8f28'] : '-'}</td>
                    </tr>
                    <tr>
                      <td>Assistent</td>
                      <td>{filterItems[selectedItem]['30a26c8348fb159c3d8266d35c4ac954d61f8138'] ? filterItems[selectedItem]['30a26c8348fb159c3d8266d35c4ac954d61f8138'] : '-'}</td>
                    </tr>
                    <tr>
                      <td>Groups</td>
                      <td>{filterItems[selectedItem]['2221f5229a3a892353c552d2f2b282f6f84cfc80'] ? filterItems[selectedItem]['2221f5229a3a892353c552d2f2b282f6f84cfc80'] : '-'}</td>
                    </tr>
                    <tr>
                      <td>Location</td>
                      <td>{filterItems[selectedItem]['a628fcb9f1376285937a9d43f32fc7d7cc9ed7d5'] ? filterItems[selectedItem]['a628fcb9f1376285937a9d43f32fc7d7cc9ed7d5'] : '-'}</td>
                    </tr>
                  </tbody>
                </TableInfo>
              </Popup>
              <DragDropContext
                onDragEnd={(result) => orderList(result)}
              >
                <Droppable 
                  droppableId="droppable"
                >
                  {(provided) => (
                    <div
                      {...provided.droppableProps}
                      ref={provided.innerRef}
                    >
                      {personsToDisplay.map((item, index) => (
                        <Person
                          key={item.id}
                          draggableId={(item.id).toString()}
                          index={index}
                          openModal={(i) => openModal(i)}
                          disabled={isDragDisabled}
                          clickDelete={(e, id) => clickDelete(e, id)}
                          {...item}
                        />
                      ))}
                      {provided.placeholder}
                    </div>
                  )}
                </Droppable>
              </DragDropContext>
              {personsToDisplay.length < filterItems.length && (
                <BtnLoadMore 
                  className="btn-load-more"
                  onClick={() => loadMore()}
                >
                  Load More
                </BtnLoadMore>
              )}
            </>
          ) : (
            <NoData> No persons found :( </NoData>
          )}
        </>
      )}
    </>
  );
};

export default PersonsList;
