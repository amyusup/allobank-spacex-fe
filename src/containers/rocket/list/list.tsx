"use client";

import { useEffect, useState } from "react";

import Button from "@/components/element/Button";
import Card from "@/components/element/Card";
import RocketForm from "./element/RocketForm";
import TextInput from "@/components/element/TextInput";
import UIState from "@/components/fragment/UIState";
import { mapRockets } from "@/helper/mapRocket";
import { useRocketContext } from "@/containers/rocket/rocket.context";
import { useRouter } from "next/navigation";

const List = () => {
  const router = useRouter();
  const { rockets, loading, error, setRockets, setLoading, setError } =
    useRocketContext();
  const [search, setSearch] = useState("");
  const [openModalAdd, setOpenModalAdd] = useState(false);

  const fetchRockets = async () => {
    setLoading(true);
    setError(false);
    try {
      const response = await fetch("https://api.spacexdata.com/v4/rockets");
      const data = await response.json();
      setRockets(mapRockets(data));
    } catch {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (!rockets.length) fetchRockets();
  }, [rockets]);

  const filteredRockets = rockets.filter((rocket) =>
    rocket.name.toLowerCase().includes(search.toLowerCase())
  );

  const handleCardClick = (id: string) => {
    router.push(`/rockets/detail/${id}`);
  };

  return (
    <div className="p-6 space-y-4">
      <h1 className="text-3xl font-bold text-blue-600">Rocket List</h1>

      <div className="flex justify-between items-center gap-4">
        <TextInput
          name="search"
          placeholder="Search rocket..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <Button
          variant="outline"
          className="w-32"
          onClick={() => setOpenModalAdd(true)}
        >
          Add Rocket
        </Button>
      </div>

      <UIState loading={loading} error={error} onRetry={fetchRockets}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredRockets.map((rocket) => (
            <Card
              key={rocket.id}
              image={rocket.flickrImages?.[0]}
              altImage={rocket.name}
              title={rocket.name}
              description={rocket.description}
              onClick={() => handleCardClick(rocket.id)}
            />
          ))}
        </div>
      </UIState>

      <RocketForm
        isOpen={openModalAdd}
        onClose={() => setOpenModalAdd(false)}
      />
    </div>
  );
};

export default List;
