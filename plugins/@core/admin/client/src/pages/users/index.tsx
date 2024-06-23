import React, { useState } from "react";
import Default from "../../components/layouts/Default";
import Card from "../../components/ui/Card";
import InputWithIcon from "../../components/ui/InputWithIcon";
import { MagnifyingGlassIcon } from "@heroicons/react/20/solid";
import Button from "../../components/ui/Button";
import { Link } from "react-router-dom";

const UsersPage = () => {
  const [filters, setFilters] = useState({
    query: "",
  });
  const [list, setList] = useState([]);

  return (
    <Default>
      <Card>
        <div className="px-8 pt-8">
          <h1 className="text-xl font-bold text-cod-gray-100">
            Users{" "}
            <span className="text-[10px] pl-1 text-cod-gray-400 font-light">
              Admin
            </span>
          </h1>
        </div>
        <div className="pt-4 px-8 flex justify-between">
          <InputWithIcon
            value={filters.query}
            placeholder="Find by name"
            onChange={(e) => setFilters({ ...filters, query: e.target.value })}
            icon={MagnifyingGlassIcon}
          />
          <div>
            <Link to="/users/create">
              <Button color="primary">Add user</Button>
            </Link>
          </div>
        </div>
      </Card>
    </Default>
  );
};

export default UsersPage;
