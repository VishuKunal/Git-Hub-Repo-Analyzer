// import { useState } from 'react';
// import axios from 'axios';

// const CreateDocumentation = () => {
//     const [searchItem, setSearchItem] = useState('');
//     const [downloadLink, setDownloadLink] = useState('');

//     const handleSubmit = async (event) => {
//         event.preventDefault();
//         const response = await axios.post("http://127.0.0.1:8000/repoanalyze/genDocument_from_docstr/", {
//             input: searchItem,
//         });
//         // Update state with the download link
//         setDownloadLink(response.data);
//     }

//     const handleSearchTextChange = (event) => {
//         setSearchItem(event.target.value);
//     }

//     const handleDownload = async () => {
//         // Download the documentation.zip file
//         const response = await axios.get(downloadLink, {
//             responseType: 'blob', // Important: specify the response type as blob
//         });
//         // Create a temporary anchor element to initiate download
//         const url = window.URL.createObjectURL(new Blob([response.data]));
//         const link = document.createElement('a');
//         link.href = url;
//         link.setAttribute('download', 'documentation.zip');
//         document.body.appendChild(link);
//         link.click();
//         // Clean up
//         link.parentNode.removeChild(link);
//     }

//     return (
//         <div>
//             <form onSubmit={handleSubmit}>
//                 <input
//                     type="text"
//                     value={searchItem}
//                     onChange={handleSearchTextChange}
//                     placeholder='Enter the GitHub repository link here'
//                 />
//                 <button type='submit'>Submit</button>
//             </form>

//             {downloadLink && (
//                 <div>
//                     <p>Documentation generated! Click below to download:</p>
//                     <button onClick={handleDownload}>Download Documentation</button>
//                 </div>
//             )}
//         </div>
//     );
// }

// export default CreateDocumentation;



// import { useState } from 'react';
// import axios from 'axios';

// const CreateDocumentation = () => {
//     const [searchItem, setSearchItem] = useState('');
//     const [downloadLink, setDownloadLink] = useState('');

//     const handleSubmit = async (event) => {
//         event.preventDefault();
//         const response = await axios.post("http://127.0.0.1:8000/repoanalyze/genDocument_from_docstr/", {
//             input: searchItem,
//         });
//         const download_link = response.data.output;
//         setDownloadLink(download_link);
//     }

//     const handleSearchTextChange = (event) => {
//         setSearchItem(event.target.value);
//     }

//     const handleDownload = async () => {
//         // Download the documentation.zip file
//         const response = await axios.get(downloadLink, {
//             responseType: 'blob', // Important: specify the response type as blob
//         });
//         // Create a temporary anchor element to initiate download
//         const url = window.URL.createObjectURL(new Blob([response.data]));
//         const link = document.createElement('a');
//         link.href = url;
//         link.setAttribute('download', 'documentation.zip');
//         document.body.appendChild(link);
//         link.click();
//         // Clean up
//         link.parentNode.removeChild(link);
//     }

//     return (
//         <div>
//             <form onSubmit={handleSubmit}>
//                 <input
//                     type="text"
//                     value={searchItem}
//                     onChange={handleSearchTextChange}
//                     placeholder='Enter the GitHub repository link here'
//                 />
//                 <button type='submit'>Submit</button>
//             </form>

//             {downloadLink && (
//                 <div>
//                     <p>Documentation generated! Click below to download:</p>
//                     <button onClick={handleDownload}>Download Documentation</button>
//                 </div>
//             )}
//         </div>
//     );
// }

// export default CreateDocumentation;



import { useState } from 'react';
import axios from 'axios';
import '../styles/CreateDocumentation.css';

const CreateDocumentation = () => {
    const [searchItem, setSearchItem] = useState('');
    const [downloadLink, setDownloadLink] = useState('');

    const handleCreateDocumentSubmit = async (event) => {
        event.preventDefault();
        const response = await axios.post("http://127.0.0.1:8000/repoanalyze/genDocument_from_docstr/", {
            input: searchItem,
        });
        // Extract the download link from the response data
        const { output } = response.data;
        // Update state with the download link
        setDownloadLink(output);
    }

    const handleSearchTextChange = (event) => {
        setSearchItem(event.target.value);
    }

    const handleDownload = async () => {
        // Download the documentation.zip file
        const response = await axios.get(downloadLink, {
            responseType: 'blob', // Important: specify the response type as blob
        });
        // Create a temporary anchor element to initiate download
        const url = window.URL.createObjectURL(new Blob([response.data]));
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', 'documentation.zip');
        document.body.appendChild(link);
        link.click();
        // Clean up
        link.parentNode.removeChild(link);
    }

    return (
            <div className="createDocument">
            <form onSubmit={handleCreateDocumentSubmit}>
                <input
                    type="text"
                    value={searchItem}
                    onChange={handleSearchTextChange}
                    placeholder='Enter the GitHub repository link here'
                />
                <button type='submit'>Submit</button>
            </form>

            {downloadLink && (
                <div>
                    <p>Documentation generated! Click below to download:</p>
                    <button onClick={handleDownload}>Download Documentation</button>
                </div>
            )}
        </div>
    );
}

export default CreateDocumentation;

