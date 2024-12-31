import React from "react";
import Title from "../component/Title";
import Store from "../component/Store";

function AllStores() {
  return (
    <div>
      <div className="mx-[119px]">
        <Title
          title="Explore Our Trusted Vendors"
          subtitle="Browse through a diverse range of vendors offering quality products across various categories"
        />
        <Store />
      </div>
    </div>
  );
}

export default AllStores;
