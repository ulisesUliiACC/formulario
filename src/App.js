import react,{useState} from "react";
import './App.css';
function App(){
  const [formData, setFormData] = useState({
    name: '',
    email:'',
  });

  const [errors,setErrors]=useState({});

  const handlechange =(event)=>{
    setFormData({
      ...formData,
      [event.target.name]:event.target.value,
    });
  };

  const handleSubmit= (event)=>{
    event.preventDefault();
    const errors ={};
    if (!formData.name){
      errors.name='por favor  ingrese tu nombre';

    }
    if(!formData.email){
      errors.email='por favor ingrese su email'
    }
    if(Object.keys(errors).length==0){
      console.log(formData);
      setFormData({name:'', email:''})
      setErrors({});
    }
    else{
      setErrors(errors);
    }

  };
  return(
    <div className="container">
      <h1>formulario en react</h1>
      <form onSubmit={handleSubmit} >
        <div className="form-control">
          <label>Nombre</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handlechange}
          />
          {errors.name && <span className="error">{errors.name}</span>}
        </div>
        <div className="form-control">
          <label>email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handlechange}
          />
          {errors.email && <span className="error">{errors.email}</span>}
        </div>
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}

export default App;