import React, {
  useState,
  useEffect,
} from 'react';
import axios from 'axios';
import PersonsList from '../components/PersonsList/index';
import Header from '../components/Header/index';
import Popup from '../components/Popup/index';
import {
  SectionContainer,
  MainTitle,
  Filter,
} from '../styles';
import { Form } from '../components/Popup/styles';

const Home = () => {
  const [showModal, setShowModal] = useState(false);
  const [searchValue, setSearchValue] = useState('');
  const [state, setState] = useState({
    persons: [],
    filterItems: [],
    itemsToShow: 0,
    loading: true,
  });
  const [newPerson, setNewPerson] = useState({
    name: '',
    email: '',
    phone: '',
    assistant: '',
    groups: '',
    location: '',
    organization: '',
  });

  useEffect(() => {
    async function getPersons() {
      try {
        await axios.get(`${process.env.REACT_APP_API_URL}?&limit=200&sort=3aff6f368301dfb82683fb161509d864295b22cc%20ASC&api_token=${process.env.REACT_APP_API_TOKEN}`).then(({ data }) => {
          setState({
            itemsToShow: 6,
            persons: data.data,
            loading: false,
            filterItems: data.data,
          });
        });
      } catch (e) {
        setState({
          ...state,
          loading: false,
        });
      }
    }

    getPersons();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function reorder(list, startIndex, endIndex) {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);

    return result;
  }

  async function reoderPersonsList(result) {
    if (!result.destination) {
      return;
    }

    const personsListing = reorder(
      state.persons,
      result.source.index,
      result.destination.index
    );

    personsListing.map(async (el, index) => {
      var item = Object.assign({}, el);

      item['3aff6f368301dfb82683fb161509d864295b22cc'] = index;

      if (item['3aff6f368301dfb82683fb161509d864295b22cc'] !== el['3aff6f368301dfb82683fb161509d864295b22cc']) {
        personsListing[index]['3aff6f368301dfb82683fb161509d864295b22cc'] = index;

        try {
          await axios.put(`${process.env.REACT_APP_API_URL}/${item.id}?api_token=${process.env.REACT_APP_API_TOKEN}`, {
            ...item,
          });
        } catch (e) {
          console.log('error', e);
        }
      }
    });

    setState({
      ...state,
      persons: personsListing,
      filterItems: personsListing,
    });
  };

  function filterPersons(e) {
    setSearchValue(e.target.value);
  }

  useEffect(() => {
    if (searchValue.length > 1) {
      setState({
        ...state,
        filterItems: state.persons.filter((person) => person.name.toLowerCase().includes(searchValue.toLowerCase())),
      });
    } else {
      setState({
        ...state,
        filterItems: state.persons,
      });
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchValue]);

  async function deletePerson(e, id) {
    e.stopPropagation();

    setState({
      ...state,
      loading: true,
    });

    try {
      await axios.delete(`${process.env.REACT_APP_API_URL}/${id}?api_token=${process.env.REACT_APP_API_TOKEN}`).then(() => {
        const clonePersons = state.persons
        const indexDeletedElm = state.persons.indexOf(state.persons.find((item) => item.id === id));
        clonePersons.splice(indexDeletedElm, 1);
        setState({
          ...state,
          persons: clonePersons,
          filterItems: clonePersons,
          loading: false,
        });
      });
    } catch (error) {
      setState({
        ...state,
        loading: false,
      });
      console.log('error', error);
    }
  }

  async function addPerson() {
    if (newPerson.name) {
      setState({
        ...state,
        loading: true,
      });

      try {
        await axios.post(`${process.env.REACT_APP_API_URL}?api_token=${process.env.REACT_APP_API_TOKEN}`, {
          'name': newPerson.name,
          'email': newPerson.email,
          'phone': newPerson.phone,
          '30a26c8348fb159c3d8266d35c4ac954d61f8138': newPerson.assistant,
          '2221f5229a3a892353c552d2f2b282f6f84cfc80': newPerson.groups,
          'a628fcb9f1376285937a9d43f32fc7d7cc9ed7d5': newPerson.location,
          'd44957aab8d5be8fb653568939c0ee954f6d8f28': newPerson.organization,
        }).then(({ data }) => {
          const clonePersons = state.persons;
          clonePersons.push(data.data);

          setSearchValue('');
          setShowModal(false);
          setState({
            ...state,
            persons: clonePersons,
            filterItems: clonePersons,
            loading: false,
          });
        });
      } catch (e) {
        setState({
          ...state,
          loading: false,
        });
        console.log('error', e);
      }
    }
  }

  return (
    <>
      <Header />
      <Popup
        open={showModal}
        onClose={() => setShowModal(false)}
        addPerson={() => addPerson()}
        title="Add Person"
        addBtn
      >
        <Form>
          <label>
            Name *
            <input
              type="text"
              name="name"
              value={newPerson.name}
              onChange={(e) => {
                setNewPerson({
                  ...newPerson,
                  name: e.target.value,
                });
              }}
            />
          </label>
          <label>
            Email
            <input 
              type="email"
              name="email"
              value={newPerson.email}
              onChange={(e) => {
                setNewPerson({
                  ...newPerson,
                  email: e.target.value,
                });
              }}
            />
          </label>
          <label>
            Phone
            <input
              type="text"
              name="phone"
              value={newPerson.phone}
              onChange={(e) => {
                setNewPerson({
                  ...newPerson,
                  phone: e.target.value,
                });
              }}
            />
          </label>
          <label>
            Assistant
            <input 
              type="text"
              name="assistant"
              value={newPerson.assistant}
              onChange={(e) => {
                setNewPerson({
                  ...newPerson,
                  assistant: e.target.value,
                });
              }}
            />
          </label>
          <label>
            Groups
            <input 
              type="text"
              name="groups"
              value={newPerson.groups}
              onChange={(e) => {
                setNewPerson({
                  ...newPerson,
                  groups: e.target.value,
                });
              }}
            />
          </label>
          <label>
            Location
            <input 
              type="text"
              name="location"
              value={newPerson.location}
              onChange={(e) => {
                setNewPerson({
                  ...newPerson,
                  location: e.target.value,
                });
              }}
            />
          </label>
          <label>
            Organization
            <input 
              type="text"
              name="organization"
              value={newPerson.organization}
              onChange={(e) => {
                setNewPerson({
                  ...newPerson,
                  organization: e.target.value,
                });
              }}
            />
          </label>
        </Form>
      </Popup>
      <SectionContainer>
        <MainTitle>
          <div>
            <h1>People's List</h1>
            <button type="button" onClick={() => setShowModal(true)}>
              Add Person
            </button>
          </div>
          <Filter
            id="search-box"
            name="search"
            type="text"
            placeholder="Type to Filter..."
            value={searchValue}
            onChange={(e) => filterPersons(e)}
          />
        </MainTitle>
        <PersonsList
          loadMore={() => setState({ ...state, itemsToShow: state.itemsToShow + 6 })}
          orderList={(result) => reoderPersonsList(result)}
          clickDelete={(e, id) => deletePerson(e, id)}
          {...state}
        />
      </SectionContainer>
    </>
  );
};

export default Home;
