    import React, {useState, useEffect} from "react";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';


function Salle(){
  const url = 'aaa';
  
  const [loading, setLoading] = useState(true);
  
  const [show, setShow] = useState(false);
  
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  
  const [show2, setShow2] = useState(false);
  
  const handleClose2 = () => setShow2(false);
  const handleShow2 = () => setShow2(true);
  
  const [error, setError] = useState(null);
  const [selectedItem, setSelectedItem] = useState({id:7,nom:"T-shirta"});

  const handleSelectItem = (itemKey) => {
    const itemDetails = salle.find(item => item.id === itemKey);
    setSelectedItem(itemDetails);
    handleShow2();
  };

	const [salle, setSalle] = useState([]);
	
	
	
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(10); 
  const [totalPages, setTotalPages] = useState(2);

	
//////// style
useEffect(() => {
  // Create a <style> element
  const styleElement = document.createElement('style');
  styleElement.innerHTML = styless; // Set the innerHTML to the styles string

  // Append the <style> element to the document's <head>
  document.head.appendChild(styleElement);

  // Cleanup function to remove the <style> element when the component unmounts
  return () => {
      document.head.removeChild(styleElement);
  };
}, []);
//////// SAVE
  const handleSaveSubmit = async (event) => {
      event.preventDefault();
      const form = event.target;
      const formData = new FormData(form);
      const data = {};
  
      for (let [key, value] of formData.entries()) {
        if (form.elements[key].tagName === 'SELECT') {
          data[key] = { id: value };
        } else {
          data[key] = value;
        }
      }
  
      try {
        const response = await fetch(url + 'salle', {
          method: 'POST',
          body: JSON.stringify(data),
          headers: {
            'Content-Type': 'application/json'
          }
        });
  
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
  
        handleClose();
        // If you want to reload the page after success
        window.location.reload();
      } catch (error) {
        console.log('Error:', error);
      }
  };

//////// UPDATE 
  const handleUpdateSubmit = async (event) => {
      event.preventDefault();
      const form = event.target;
      const formData = new FormData(form);
      const data = {};
      for (let [key, value] of formData.entries()) {

        if (form.elements[key].tagName === 'SELECT') {
          data[key] = { id: value };
        } else {
          data[key] = value;
        }
      }
      try {
        const response = await fetch(url + 'salle', {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(selectedItem)
        });
  
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        handleClose2();
        // If you want to reload the page after success
        window.location.reload();
      } catch (error) {
        console.error('Error:', error);
      }
  };

//////// DELETE
  const handleDeleteClick = async (item) => {
    try {
      console.log(item);
      if (window.confirm('Are you sure you want to delete this item?')) {
          // Proceed with the delete action
        const response = await fetch(url + 'salle', {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(item)
        });
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        // If you want to reload the page after success
        window.location.reload();
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

	
  const fetchData = () => {
    console.log((page - 1) * pageSize+"huhu");
    fetch(`${url}salle/page?pageSize=${page}&offset=${pageSize}`)
    // fetch(`${url}salle/page?pageSize=1&offset=10`)
        .then(response => response.json())
        .then(data => {
            setSalle(data);
            // Assuming your backend provides total number of pages in the response
            // setTotalPages(data.totalPages);
        })
        .catch(error => console.error('Error fetching data:', error));
  };
  useEffect(() => {
    fetchData();
  }, [page, pageSize]);
	

  const handlePreviousPage = () => {
    if (page > 1) {
        setPage(page - 1);
        setCategorie(null);
        useEffect(() => {
          fetchData();
        }, [page, pageSize]);
    }
  };

  const handleNextPage = () => {
      if (page < totalPages) {
          setPage(page + 1);
          setCategorie(null);
          useEffect(() => {
            fetchData();
          }, [page, pageSize]);
      }
  };


	const handleInputNbrPersonneChange = (event) => {
		setSelectedItem({ ...selectedItem, nbrPersonne: event.target.value });
	};
	
	const handleInputIdChange = (event) => {
		setSelectedItem({ ...selectedItem, id: event.target.value });
	};
	
	const handleInputNomChange = (event) => {
		setSelectedItem({ ...selectedItem, nom: event.target.value });
	};
	
	


	useEffect(() => {
		const getSalle = async () => {
			try {
				const response = await fetch(url + 'salle');
					if (!response.ok) {
						throw new Error('Network response was not ok');
					};
				const data = await response.json();
				setSalle(data);
			} catch (error) {
				setError(error);
			} finally {
				setLoading(false);
			}
		};
		getSalle();
	}, []);
	

  return (
    <div className="container">
      {/* Add Modal */}
      {show && (
                <div style={styles.overlay}>
                    <div style={styles.modal}>
                        <div style={styles.modalHeader}>
                            <h2>Add Salle</h2>
                            <button style={styles.closeButton} onClick={handleClose}>Close</button>
                        </div>
                        <div style={styles.modalBody}>
                            <form action="" method="" id="insert" onSubmit={handleSaveSubmit} style={styles.form}>
                            	<div className="mb-3"> 
	 	<label className="form-label">Nbr Personne</label> 
	 	<input className="form-control" type="number" name="nbrPersonne" />
	</div>
	<div className="mb-3"> 
	 	<label className="form-label">Nom</label> 
	 	<input className="form-control" type="text" name="nom" />
	</div>
	

                                <div className="mb-3">
                                    <button style={styles.button} type="submit">Save Changes</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            )}

            {/* Update Modal */}
            {show2 && (
                <div style={styles.overlay}>
                    <div style={styles.modal}>
                        <div style={styles.modalHeader}>
                            <h2>Update Salle</h2>
                            <button style={styles.closeButton} onClick={handleClose2}>Close</button>
                        </div>
                        <div style={styles.modalBody}>
                            <form action="" method="" id="update" onSubmit={handleUpdateSubmit} style={styles.form}>
                                	<div className="mb-3"> 
	 	<label className="form-label">Nbr Personne</label> 
	 	<input className="form-control" type="number" name="nbrPersonne" onChange={handleInputNbrPersonneChange} value={selectedItem ? selectedItem.nbrPersonne:''} />
	</div>
	<div className="mb-3"> 
	 	<label className="form-label"></label> 
	 	<input className="form-control" type="hidden" name="id" onChange={handleInputIdChange} value={selectedItem ? selectedItem.id:''} />
	</div>
	<div className="mb-3"> 
	 	<label className="form-label">Nom</label> 
	 	<input className="form-control" type="text" name="nom" onChange={handleInputNomChange} value={selectedItem ? selectedItem.nom:''} />
	</div>
	

                                <div className="mb-3">
                                    <button style={styles.button} type="submit">Save Changes</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            )}

    <header>
        <h1>Salle</h1>
        <button className="add-button" onClick={handleShow}>Add Salle</button>
    </header>
    <main>
        <table>
            <thead>
                <tr>
			<th> Nbr Personne </th>
			<th> Id </th>
			<th> Nom </th>

                    <th></th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {salle && salle.map((item) => (
                  <tr key={item.id}>
		<td>{item.nbrPersonne}</td>
		<td>{item.id}</td>
		<td>{item.nom}</td>

                      <td>
                          <button style={style.deleteButton} onClick={() => handleDeleteClick(item)}>Delete</button>
                      </td>
                      <td>
                          <button style={style.updateButton} onClick={() => handleSelectItem(item.id)}>Update</button>
                      </td>
                  </tr>
              ))}
            </tbody>
        </table>
        <div style={style.pagination}>
            <button onClick={handlePreviousPage} disabled={page === 1} className="prev">Previous</button>
            <span className="span-page">{page}</span>
            <button onClick={handleNextPage} disabled={page === totalPages} className="next">Next</button>
        </div>
    </main>
</div>
    
  )
}

const style = {
  addButton: {
      marginBottom: '20px',
  },
  deleteButton: {
      cursor: 'pointer',
      padding: '5px 10px',
      borderRadius: '3px',
      border: 'none',
      color: '#fff',
      backgroundColor: '#dc3545',
  },
  updateButton: {
      cursor: 'pointer',
      padding: '5px 10px',
      borderRadius: '3px',
      border: 'none',
      color: '#fff',
      backgroundColor: '#007bff',
  },
  pagination: {
      marginTop: '20px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
  },
};
const styles = {
  overlay: {
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
  },
  modal: {
      backgroundColor: '#fff',
      padding: '20px',
      borderRadius: '5px',
      boxShadow: '0 0 10px rgba(0, 0, 0, 0.3)',
      width: '400px',
  },
  modalHeader: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: '20px',
  },
  closeButton: {
      backgroundColor: 'transparent',
      border: 'none',
      cursor: 'pointer',
      fontSize: '16px',
      color: '#555',
  },
  modalBody: {
      marginBottom: '20px',
  },
};
const styless = `
    .span-page{
      width: 50px;
      text-align: center;
      background-color: #e7e7e7;
    }
    .prev{
      width: 100px;
      background-color: #007bff;
      border-radius: 5px;
      color: white;
    }
    .next{
      width: 100px;
      background-color: #007bff;
      border-radius: 5px;
      color: white;
    }
    .container {
        font-family: Arial, sans-serif;
        max-width: 800px;
        margin: 0 auto;
        padding: 20px;
    }
    header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 20px;
    }
    
    h1 {
        font-size: 24px;
        margin: 0;
    }
    
    .add-button {
        padding: 10px 20px;
        font-size: 16px;
        border: none;
        border-radius: 5px;
        background-color: #007bff;
        color: #fff;
        cursor: pointer;
    }
    
    table {
        width: 100%;
        border-collapse: collapse;
    }
    
    th, td {
        border: 1px solid #ccc;
        padding: 10px;
        text-align: left;
    }
    
    tbody tr:nth-child(even) {
        background-color: #f2f2f2;
    }
    
    .delete-button, .update-button {
        padding: 5px 10px;
        font-size: 14px;
        border: none;
        border-radius: 5px;
        background-color: #dc3545;
        color: #fff;
        cursor: pointer;
        margin-right: 5px;
    }
    
    .update-button {
        background-color: #ffc107;
    }
    
    .pagination {
        margin-top: 20px;
    }
    
    .pagination button {
        padding: 8px 16px;
        font-size: 14px;
        border: none;
        border-radius: 5px;
        background-color: #007bff;
        color: #fff;
        cursor: pointer;
        margin-right: 5px;
    }
    
    .pagination button:disabled {
        background-color: #ccc;
        cursor: not-allowed;
    }
    
    .pagination span {
        padding: 8px 16px;
        font-size: 14px;
        border: 1px solid #ccc;
        border-radius: 5px;
        background-color: #fff;
        color: #000;
        margin-right: 5px;
    }
`;
export default Salle;
