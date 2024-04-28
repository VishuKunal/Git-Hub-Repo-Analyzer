// import { useState, useEffect } from 'react';
// import '../styles/DocGenerator.css';
// import axios from 'axios';

// const DocGenerator = () => {
//     // Declare state variables
//     const [searchItem, setSearchItem] = useState('');
//     const [error, setError] = useState(null);
//     const [isLoading, setIsLoading] = useState(false);
//     const [filesInRepo, setFilesInRepo] = useState([]);
//     const [checkedFiles, setCheckedFiles] = useState([]);
//     const [result, setResult] = useState("");
//     // const [filesToGenerateDoc, setFilesToGenerateDoc] = useState([]);

//     // Handle form submission
//     const handleDocGeneratorSubmit = async (event) => {
//         event.preventDefault();
//         setIsLoading(true);
//         setError(null);

//         try {
//             const response = await axios.post('http://127.0.0.1:8000/repoanalyze/get_files_from_repository/', {
//                 input: searchItem
//             })
//             const data = response.data.output;
//             console.log(data);
//             console.log("Files in Repo: ");
//             setFilesInRepo(data)
//             // setResult("")
//             console.log(filesInRepo);
//         } catch (error) {
//             console.error('Error fetching files:', error);
//             setError('Failed to retrieve files. Please try again later.');
//         } finally {
//             setIsLoading(false);
//         }
//     }

//     const sendtobackend =async(event)=>{

//         event.preventDefault();
//         try{
//             const response = await axios.post('http://127.0.0.1:8000/repoanalyze/generate_doc_strings/', {
//                 input: checkedFiles
//             })
//             const data = response.data.output;
//             setResult(data)
//             setFilesInRepo([])
//            } catch(error){
//                 console.error('Error fetching files:', error);
//             setError('Failed to retrieve files. Please try again later.');
//             }
           
//     }

  
//     const handleFileCheckboxChange = (event) => {
//         const fileName = event.target.name;
//         if (event.target.checked) {
//             setCheckedFiles([...checkedFiles, fileName]);
//         } else {
//             setCheckedFiles(checkedFiles.filter(file => file !== fileName));
//         }
//     }

//     useEffect(() => {
//         console.log(checkedFiles)
//     }, [checkedFiles])

//     // const fetchFilesFromDir = async (dir) => {
//     //     dir.preventDefault();

//     //     try {
//     //         const response = await axios.post('http://127.0.0.1:8000/repoanalyze/get_files_from_dir/', {
//     //             input: dir
//     //         })
//     //         const data = response.data.output;
//     //         filesInRepo[dir] = data;
//     //     } catch (error) {
//     //         console.error('Error fetching files:', error);
//     //         setError('Failed to retrieve files. Please try again later.');
//     //     }
//     // }

//     // useEffect(() => {
//     //     const displayFiles = () => {
//     //         return (
//     //             <div className="doc-generation">
//     //                 <div className="files-container">
//     //                     {filesInRepo && filesInRepo.map((file, index) => (
//     //                         <input type='radio' key={index}>{file}</input>
//     //                     ))}
//     //                 </div>
//     //                 {/* <button onClick={generateDocumentation}>Generate Doc</button> */}
//     //             </div>
//     //         )
//     //     }
//     //     displayFiles();
//     // }, [filesInRepo])

//     return (
//         <div className="doc-generator-container">
//             <form onSubmit={handleDocGeneratorSubmit}>
//                 <input
//                     type="text"
//                     value={searchItem}
//                     onChange={(event) => setSearchItem(event.target.value)}
//                     placeholder="Enter the GitHub repository link here for doc generation"
//                 />
//                 <button type="submit" disabled={isLoading}>
//                     {isLoading ? 'Loading...' : 'Fetch Repository'}
//                 </button>
//             </form>
//             {filesInRepo.length > 0 && !result ? (
//                 <form onSubmit={sendtobackend}>
//                     {filesInRepo.map((file, index) => (
//                         <div className="div">
//                             <input
//                                 key={index}
//                                 type='checkbox'
//                                 name={file}
//                                 onChange={handleFileCheckboxChange}
//                             />
//                             <label htmlFor={file}>{file}</label>
//                         </div>
//                     ))}
//                     <button type='submit'>Generate Branch</button>
//                 </form>) : null 
//             }

//             {result && filesInRepo.length === 0 ? (
//                 <p>result</p>
//             ) : null}
            
//             {result && !error && <p>{result}</p>}
//             {error && !result && <p className="error-message">{error}</p>}
//         </div>
//     )
// }

// export default DocGenerator;



import { useState } from 'react';
import '../styles/DocGenerator.css';
import axios from 'axios';

const DocGenerator = () => {
    // Declare state variables
    const [searchItem, setSearchItem] = useState('');
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [filesInRepo, setFilesInRepo] = useState([]);
    const [selectedFiles, setSelectedFiles] = useState([]);
    const [docGenerated, setDocGenerated] = useState(false);

    // Handle form submission
    const handleDocGeneratorSubmit = async (event) => {
        event.preventDefault();
        setIsLoading(true);
        setError(null);

        try {
            const response = await axios.post('http://127.0.0.1:8000/repoanalyze/get_files_from_repository/', {
                input: searchItem
            })
            const data = response.data.output;
            console.log(data);
            console.log("Files in Repo: ");
            setFilesInRepo(data)
            console.log(filesInRepo);
        } catch (error) {
            console.error('Error fetching files:', error);
            setError('Failed to retrieve files. Please try again later.');
        } finally {
            setIsLoading(false);
        }
    }

    const handleFileSelection = (e) => {
        e.preventDefault();

        const file = e.target.name;
        if (e.target.checked) {
            setSelectedFiles([...selectedFiles, file])
        } else {
            setSelectedFiles(selectedFiles.filter((selectedFile) => selectedFile !== file))
        }
    }

    const handleDocGeneration = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        setError(null);
        try {
            const response = await axios.post('http://127.0.0.1:8000/repoanalyze/generate_doc_strings/', {
                input: selectedFiles
            })
            const data = response.data.output;
            if (data === 'success') {
                setDocGenerated(true);
                setFilesInRepo([]);
                setSelectedFiles([]);
                setError(null);
            }
            /* else {
                setError('Failed to generate documentation. Please try again later.');
                setDocGenerated(false);
            }*/
        } catch(error) {
            setError('Failed to generate documentation. Please try again later.');
            setDocGenerated(false);
        } finally {
            setIsLoading(false);
        }
    }

    return (
        <div className="doc-generator-container">
            <form onSubmit={handleDocGeneratorSubmit}>
                <input
                    type="text"
                    value={searchItem}
                    onChange={(event) => setSearchItem(event.target.value)}
                    placeholder="Enter the GitHub repository link here for doc generation"
                />
                <button type="submit" disabled={isLoading}>
                    {isLoading ? 'Loading...' : 'Fetch Repository'}
                </button>
            </form>

            {filesInRepo.length > 0 && !docGenerated ? (
                <form onSubmit={handleDocGeneration}>
                    {filesInRepo.map((file, index) => (
                        <div className="div">
                            <input
                                key={index}
                                type='checkbox'
                                name={file}
                                onChange={handleFileSelection}
                            />
                            <label htmlFor={file}>{file}</label>
                        </div>
                    ))}
                    <button>{isLoading ? "Loading..." : "Generate Doc"}</button>
                </form>) : null
            }

            {error && !docGenerated && <p className="error-message">{error}</p>}
            {docGenerated && <p className="success-message">Documentation generated successfully!</p>}

        </div>
    )
}

export default DocGenerator;