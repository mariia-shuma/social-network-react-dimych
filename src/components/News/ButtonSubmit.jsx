
function handleSubmit(e){
    e.preventDefault();
    alert('you have submitted the form')
  }



function ButtonSubmit() {
  return (
    <div>
     <form onSubmit={handleSubmit}>
       <button type='submit'>Submit</button>
       </form>
    </div>
  )
}
export default  ButtonSubmit;