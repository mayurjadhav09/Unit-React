import styled from "styled-components";
const Table = styled.table`
//   border: 1px solid black;
  border-radius: 25px;
  font-family: Arial, Helvetica, sans-serif;
  border-collapse: collapse;
  width: 800px;
  margin: auto;
  box-shadow: rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset, rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset, rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px;
  td,
  th {
    padding: 8px;
  }
  thead tr {
    background: gold;
    color: black;
    border-bottom: 1px solid black;
    border-radius: 25px;
    padding: 12px;
    font-size:25px;
    font-weigth:bolde;
    font-family:monospace;
  }
  tbody tr {
    border-bottom: 1px solid black;
  }
  tbody tr:nth-child(even) {
    background: lightgreen;
    color:marron;
  }
  tbody tr:hover {
    // background-color: teal;
    // color: gold;
    font-size:20px;
    cursor: pointer;
  }
  th > input {
    width: 25px;
    height: 35px;
  }
`;
const Div = styled.div`
  background-color: lightblue;
  width:1000px;
  margin:auto;
  margin-top: 25px;
  padding: 25px;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
    rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
    rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;


    h1{
        font-size:35px;
        color:maroon;
        font-family:Arial;
    }
`;



export const Tablestyled = () => {
  return (
    <Div>
      <h1>Table </h1>
      <Table>
        <thead>
          <tr>
            <th>Sr No</th>
            <th>Name</th>
            <th>Status</th>
            <th>Checkmark</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>1</th>
            <th>Portfolio</th>
            <th>completed</th>
            <th>
              <input type="checkbox" />
            </th>
          </tr>
          <tr>
            <th>2</th>
            <th>Github</th>
            <th>completed</th>
            <th>
              <input type="checkbox" />
            </th>
          </tr>
          <tr>
            <th>3</th>
            <th>Pram1</th>
            <th>completed</th>
            <th>
              <input type="checkbox" />
            </th>
          </tr>
          <tr>
            <th>4</th>
            <th>Pram2</th>
            <th>completed</th>
            <th>
              <input type="checkbox" />
            </th>
          </tr>
          <tr>
            <th>5</th>
            <th>Im 1</th>
            <th>completed</th>
            <th>
              <input type="checkbox" />
            </th>
          </tr>
          <tr>
            <th>6</th>
            <th>Im 2</th>
            <th>Not completed</th>
            <th>
              <input type="checkbox" />
            </th>
          </tr>
        </tbody>
      </Table>
    </Div>
  );
};
