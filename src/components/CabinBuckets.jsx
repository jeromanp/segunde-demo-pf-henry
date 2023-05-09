import { supabase } from "../utils/supabase";
import { useState } from "react";
import Swal from "sweetalert2";

//type  y name seran los valores de la cabaña dado por el formulario para editar

const CabinBuckets = ({ type = "A", name = "Cabaña A1" }) => {
  //en los buckets de Supabase no permite la ñ
  const newName = name.replace("Cabaña ", "");
  const [selectedFiles, setSelectedFiles] = useState([]);

  const handleUpload = async () => {
    const totalFiles = selectedFiles.length;
    let uploadedFiles = 0;

    for (const selectedFile of selectedFiles) {
      const { data, error } = await supabase.storage
        .from("cabanas_gallery")
        .upload(`${type}/${newName}/` + selectedFile?.name, selectedFile);

      if (data) {
        uploadedFiles++;
      } else if (error) {
        console.log(error);
        Swal.fire(error.message);
        return;
      }
    }

    if (uploadedFiles === totalFiles) {
      Swal.fire("Todas las imágenes se subieron correctamente");
      setSelectedFiles([]);
    }
  };

  const handleDeleteClick = (index) => {
    const newSelectedFiles = [...selectedFiles];
    newSelectedFiles.splice(index, 1);
    setSelectedFiles(newSelectedFiles);
  };

  return (
    <div className="max-w-xl">
      <div className="flex flex-col items-center space-y-4">
        <label htmlFor="file_input" className="font-medium text-lg">
          Seleccionar imágenes:
        </label>
        <input
          type="file"
          id="file_input"
          name="file_input"
          accept=".jpg, .jpeg, .png"
          className="px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          onChange={(e) => {
            setSelectedFiles([...selectedFiles, ...e.target.files]);
          }}
          multiple
        />
        {selectedFiles.length > 0 && (
          <div className="flex flex-col items-center space-y-4">
            {selectedFiles.map((file, index) => (
              <div key={file.name} className="flex items-center space-x-4">
                <img
                  src={URL.createObjectURL(file)}
                  alt="Archivo seleccionado"
                  className="max-w-xs rounded-md shadow-sm"
                />
                <button
                  onClick={() => handleDeleteClick(index)}
                  className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                >
                  Borrar
                </button>
              </div>
            ))}
            <div className="flex space-x-4">
              <button
                onClick={handleUpload}
                className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Subir
              </button>
              <button
                onClick={() => setSelectedFiles([])}
                className="px-4 py-2 bg-gray-300 text-gray-600 rounded-md hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
              >
                Cancelar
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CabinBuckets;
