/* eslint-disable */
import React from "react";
import ImageUploading from "react-images-uploading";

export function ImageUpload({ image, onImageChange, children }) {
  const dataURLKey = "data_url";
  return (
    <ImageUploading
      name="file"
      value={image && [image]}
      onChange={(imageList) => onImageChange(imageList[0])}
      dataURLKey={dataURLKey}
    >
      {({ imageList, onImageUpload, onImageUpdate, onImageRemove }) =>
        imageList.length === 0 ? (
          <button
            // type="button" prevents form from being submitted when pressed
            type="button"
            className="btn btn-block btn-secondary"
            style={{ height: "5em" }}
            onClick={onImageUpload}
          >
            {children}
          </button>
        ) : (
          <div
            className="card bg-secondary position-relative"
            style={{ overflow: "hidden" }}
          >
            <img className="card-img-top" src={imageList[0][dataURLKey]} />
            <div
              className="p-2 position-absolute btn-group"
              style={{ bottom: 0, right: 0 }}
            >
              <button
                // type="button" prevents form from being submitted when pressed
                type="button"
                className="btn btn-sm btn-dark"
                onClick={() => onImageUpdate(0)}
              >
                Replace
              </button>
              <button
                // type="button" prevents form from being submitted when pressed
                type="button"
                className="btn btn-sm btn-danger"
                onClick={() => onImageRemove(0)}
              >
                Remove
              </button>
            </div>
          </div>
        )
      }
    </ImageUploading>
  );
}
