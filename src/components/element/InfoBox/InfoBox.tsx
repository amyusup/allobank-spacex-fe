"use client";

interface IInfoBoxProps {
  label: string;
  value: string | number;
}

const InfoBox = ({ label, value }: IInfoBoxProps) => {
  return (
    <div className="p-4 bg-black border border-blue-600 rounded-xl shadow-sm shadow-blue-600">
      <h4 className="text-sm text-blue-600 mb-1">{label}</h4>
      <p className="text-base font-medium text-gray-600">{value}</p>
    </div>
  );
};

export default InfoBox;
