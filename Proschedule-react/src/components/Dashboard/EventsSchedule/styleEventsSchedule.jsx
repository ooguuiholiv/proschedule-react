import styled from "styled-components";

export const Container = styled.div``;

export const Content = styled.div`
  width: 100%;
  margin-top: 5rem;
  border-radius: 0.3125rem;
  background-color: #363636d8;
  color: white;

  .content-menu {
    height: 4rem;
    border-bottom: 1px solid rgba(243, 176, 192, 0.45);
    display: flex;
    align-items: center;
    font-weight: bold;
    gap: 1rem;

    button {
      color: white;
      text-decoration: none;
      background: none;
      border: none;
      cursor: pointer;
      padding: 0.5rem 1rem;
      transition: 0.1s;
    }

    button.active {
      color: #f3b0c0;
    }
    button:hover {
      border-bottom: solid 2px #fc5f54;
    }
  }

  label {
    color: white;
  }

  table {
    max-width: 100rem;
    border-collapse: collapse;

    margin-top: 20px;

    th {
      max-width: 100%; /* Define a largura máxima como 100% */
      width: 30rem; /* Define a largura automática para acomodar o conteúdo */
      overflow-x: auto;
      padding: 8px 1px; /* Reduz o preenchimento dos elementos th e td */
      margin: 0;
      border-bottom: 1px solid #ddd;
      font-weight: bold;
    }

    td {
      padding: 1rem 0;
      padding-left: 6rem;
      max-width: 100%; /* Define a largura máxima como 100% */
      width: 30rem; /* Define a largura automática para acomodar o conteúdo */
      overflow-x: auto;
      border-bottom: 1px solid #ddd;
    }
  }
  .button-confirm {
    color: #4caf50;
    background-color: #363636d8;
    border: solid 0px #363636d8;
    border-radius: 10px;
    padding: 10px;
    margin-right: 10px;
    cursor: pointer;
    transition: 0.5s;
  }
  .button-confirm:hover {
    background-color: #4caf50;
    color: white;
  }
  .button-denied {
    color: #ff0000;
    background-color: #363636d8;
    border: solid 0px #363636d8;
    border-radius: 10px;
    padding: 10px;
    margin-right: 20px;
    cursor: pointer;
    transition: 0.5s;
  }
  .button-denied:hover {
    background-color: #ff0000;
    color: white;
  }
  #eventsPerPage {
    position: relative;
    top: 0rem;
    left: 1rem;
  }

  .pagination-button {
    background-color: transparent;
    color: #555;
    border: 1px solid #ccc;
    padding: 8px 12px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 14px;
    margin: 0px 4px;
    cursor: pointer;
    border-radius: 4px;
    transition: background-color 0.3s ease;
  }
  .pagination-button:hover {
    background-color: white;
  }
  .pagination-button.active {
    background-color: #4caf50;
    color: white;
  }

  #pagination {
    display: flex;
    justify-content: center;
  }

  @media screen and (max-width: 1111px) {
    table th,
    table td {
      padding: 0.5rem 3rem; /* Reduz o espaçamento entre as células em telas menores */
    }

    .pagination-button {
      padding: 6px 8px; /* Reduz o padding dos botões de paginação */
      font-size: 12px; /* Reduz o tamanho da fonte dos botões de paginação */
    }
  }
  @media screen and (max-width: 803px) {
    table {
      td {
        position: relative;
        max-width: 10%;
        width: -2rem;
      }
      th {
        max-width: 10%;
        width: 1rem;
      }
    }
  }
`;
