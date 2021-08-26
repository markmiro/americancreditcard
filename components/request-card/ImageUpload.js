/* eslint-disable */
import React, { useEffect, useState } from "react";
import ImageUploading from "react-images-uploading";

import Resizer from "react-image-file-resizer";

export const resizeFile = (file) => {
  const MAX_W = 1024;
  const MAX_H = MAX_W;

  return new Promise((resolve) => {
    Resizer.imageFileResizer(
      file,
      MAX_W,
      MAX_H,
      "JPEG",
      75,
      0,
      (uri) => {
        resolve({
          ...file,
          size: null,
          type: "image/jpeg",
          dataUrl: uri,
        });
      },
      "base64"
    );
  });
};

export function ImageUpload({ image, onImageChange, buttonId, children }) {
  const dataURLKey = "dataUrl";

  return (
    <ImageUploading
      name="file"
      value={image && [image]}
      onChange={async (imageList) => {
        if (imageList[0]) {
          onImageChange(await resizeFile(imageList[0].file));
        } else {
          onImageChange(null);
        }
      }}
      dataURLKey={dataURLKey}
    >
      {({ imageList, onImageUpload, onImageUpdate, onImageRemove }) =>
        imageList.length === 0 ? (
          <button
            // type="button" prevents form from being submitted when pressed
            type="button"
            // `id` used for focusing on submit when user forgot to add image
            id={buttonId}
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
            <img className="card-img-top" src={image[dataURLKey]} />
            <div
              className="p-2 position-absolute btn-group shadow"
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
