async function main() {
  const ToDo = await ethers.getContractFactory("ToDoList");
  const todo = await ToDo.deploy();

  await todo.deployed();

  console.log("Contract 'ToDoList' deployed to: ", todo.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
