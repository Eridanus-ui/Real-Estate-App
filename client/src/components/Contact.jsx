import React, { useEffect, useState } from "react";

export default function Contact({ listing }) {
  const [landlord, setLanlord] = useState(null);

  useEffect(() => {
    const fetchLandLord = async () => {
      try {
        const res = await fetch(`/api/user/${listing.userRef}`);
        const data = await res.json();
        setLanlord(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchLandLord();
  }, listing.userRef);
  return (
    <div>
      {landlord && (
        <div className="">
          <p>
            Contact <span className="font-semibold">{landlord.username}</span>{" "}
            for{" "}
            <span className="font-semibold">{listing.name.toLowerCase()}</span>
          </p>
        </div>
      )}
    </div>
  );
}
