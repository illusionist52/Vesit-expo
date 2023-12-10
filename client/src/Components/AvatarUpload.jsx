import React, { useState } from 'react';

const AvatarUpload = ({setAvatar}) => {
  const [avatarPreview, setAvatarPreview] = useState(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setAvatar(file)

    if (file) {
      const reader = new FileReader();

      reader.onload = function (event) {
        setAvatarPreview(event.target.result);
      };
      
      
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="text-center">
      <label htmlFor="avatarInput" className="inline-block relative">
        <div
          className="w-24 h-24 rounded-full overflow-hidden bg-slate-200 inline-block"
        >
          {avatarPreview ? (
            <img
              src={avatarPreview}
              alt="Avatar Preview"
              className="w-full h-full object-cover"
            />
          ) : (
            <img src='../../public/user.png'/>
          )}
        </div>
        <input
          type="file"
          accept="image/*"
          id="avatarInput"
          className="absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer"
          onChange={handleFileChange}
          
        />
      </label>
    </div>
  );
};

export default AvatarUpload;
