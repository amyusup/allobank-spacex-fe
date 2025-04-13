"use client";

import { IRocket, defaultRocket } from "../../rocket.types";

import Button from "@/components/element/Button";
import Image from "@/components/element/Image";
import Modal from "@/components/element/Modal";
import TextInput from "@/components/element/TextInput";
import { useAlert } from "@/components/fragment/Alert/alert.context";
import { useRocketContext } from "@/containers/rocket/rocket.context";
import { useState } from "react";

interface IRocketFormProps {
  isOpen: boolean;
  onClose: () => void;
}

const RocketForm = ({ isOpen, onClose }: IRocketFormProps) => {
  const { setRockets, rockets } = useRocketContext();
  const { setLoadingAlert, setSuccessAlert, setFailedAlert } = useAlert();
  const [form, setForm] = useState<IRocket>(defaultRocket);
  const [newImageUrl, setNewImageUrl] = useState("");

  const addRocket = (rocket: IRocket) => {
    setLoadingAlert();
    const timer = setTimeout(() => {
      try {
        setRockets([...rockets, rocket]);
        setSuccessAlert();
      } catch {
        setFailedAlert();
      }
    }, 500);

    return () => clearTimeout(timer);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    addRocket({
      id: Date.now().toString(),
      name: form?.name || "",
      description: form?.description || "",
      flickrImages: form?.flickrImages || [],
      costPerLaunch: form?.costPerLaunch,
      country: form?.country,
      firstFlight: form?.firstFlight,
    });
    setForm(defaultRocket);
    setNewImageUrl("");
    onClose();
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleAddImage = () => {
    if (newImageUrl) {
      setForm((prev) => ({
        ...prev,
        flickrImages: [...(prev?.flickrImages || []), newImageUrl],
      }));
      setNewImageUrl("");
    }
  };

  const handleRemoveImage = (index: number) => {
    setForm((prev) => ({
      ...prev,
      flickrImages: prev?.flickrImages?.filter((_, i) => i !== index) || [],
    }));
  };

  return (
    <Modal isOpen={isOpen}>
      <form onSubmit={handleSubmit} className="space-y-8 p-4">
        <h3 className="font-semibold text-blue-600">Add Rocket</h3>
        <div className="space-y-4">
          <TextInput
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Name"
            required
          />
          <TextInput
            name="description"
            value={form.description}
            onChange={handleChange}
            placeholder="Description"
            required
          />
          <div className="space-y-2">
            <div className="flex gap-2">
              <TextInput
                name="imageUrl"
                placeholder="Image URL"
                value={newImageUrl}
                onChange={(e) => setNewImageUrl(e.target.value)}
              />
              <Button variant="outline" onClick={handleAddImage}>
                Add
              </Button>
            </div>
            <ul className="list-disc text-sm text-gray-600">
              {form.flickrImages.map((url, i) => (
                <li
                  key={i}
                  className="flex justify-between items-center gap-2 space-y-2"
                >
                  <Image
                    src={url || ""}
                    alt={`image-${i}`}
                    className="min-w-12 w-12 h-8 object-cover object-top rounded mb-2"
                  />
                  <span className="break-all w-full overflow-ellipsis whitespace-nowrap overflow-hidden">
                    {url}
                  </span>
                  <button
                    type="button"
                    onClick={() => handleRemoveImage(i)}
                    className="ml-2 text-red-600 hover:text-red-700 text-xs"
                  >
                    Remove
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex items-center border rounded focus-within:border-blue-500 focus-within:ring-2 focus-within:ring-blue-600">
            <span className="px-3">$</span>
            <input
              type="number"
              placeholder="Cost Per Launch"
              name="costPerLaunch"
              value={form.costPerLaunch}
              onChange={handleChange}
              className="w-full px-3 py-2 rounded focus:outline-none focus:border-blue-600"
              required
            />
          </div>
          <TextInput
            name="country"
            value={form.country}
            onChange={handleChange}
            placeholder="Country"
            required
          />
          <input
            type="date"
            placeholder="First Flight"
            name="firstFlight"
            value={form.firstFlight}
            onChange={handleChange}
            className="w-full border px-3 py-2 rounded focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-600"
            required
          />
        </div>
        <div className="flex items-center justify-between gap-4 mt-4">
          <Button variant="outline" className="w-32" onClick={onClose}>
            Cancel
          </Button>
          <Button type="submit" className="w-32">
            Add Rocket
          </Button>
        </div>
      </form>
    </Modal>
  );
};
export default RocketForm;
