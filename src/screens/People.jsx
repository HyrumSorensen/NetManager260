import { useState, useEffect } from "react";
import axios from "axios";
import PersonInfo from "../components/PersonInfo";
import MainHeader from "../components/MainHeader";
import "./People.css";

const People = () => {
  let user = window.sessionStorage.getItem("user");

  let [people, setPeople] = useState([]);

  let [search, setSearch] = useState("");

  let [searchType, setSearchType] = useState("");

  const searching = (e) => {
    setSearch(e.target.value);
  };
  const searchingType = (e) => {
    setSearchType(e.target.value);
  };

  let body = {
    user: user,
  };

  useEffect(() => {
    if(window.sessionStorage.getItem("user") == -1) {
      window.location.assign("http://localhost:3000")
    }
    axios
      .get("http://localhost:8000/getPeople", { params: { user: body.user } })
      .then((res) => {
        setPeople(res.data[0]);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <MainHeader />
      <div className="search">
        <input
          onChange={searching}
          className="search-bar"
          placeholder="Search By Name"
        />

        <select
          onChange={searchingType}
          className="type-search"
          name="type"
          id="type"
        >
          <option value="All">All</option>
          <option value="Family">Family</option>
          <option value="Friend">Friend</option>
          <option value="Acquaintance">Acquaintance</option>
          <option value="Work Buddy">Work Buddy</option>
          <option value="Romantic Possibility">Romantic Possibility</option>
        </select>
      </div>
      <div className="people-boxes">
        {people
          .filter((value) => {
            if (search === "") {
              return value;
            } else if (
              value.name.toLowerCase().includes(search.toLowerCase())
            ) {
              return value;
            }
          })

          .filter((value) => {
            if (searchType === "" || searchType === "All") {
              return value;
            }
            if (value.type.toLowerCase().includes(searchType.toLowerCase())) {
              return value;
            }
          })

          .map((peopleList) => {
            return (
              <div key={peopleList.person_id}>
                <PersonInfo List={peopleList} />
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default People;
