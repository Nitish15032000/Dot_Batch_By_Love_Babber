function AddTodo() {
   return <div class="row">
      <div class="col-4">
         <input type="text" placeholder="Enter todo here" />
      </div>
      <div class="col-4">
         <input type="date" />
      </div>
      <div class="col">
         <button type="button" class="btn btn-primary">Add</button>
      </div>
   </div>
}

export default AddTodo;