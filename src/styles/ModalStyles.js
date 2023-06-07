import styled from 'styled-components';
import { linkColor } from '../variables';


const ModalStyles = styled.div`
  .close {
    position: absolute;
    right: 15px;
    top: 10px;
    right: 20px;
    cursor: pointer;
    position: absolute;
    font-size: 28px;
    font-weight: bold;
    color: #aaa;
    text-decoration: none;
    &:hover {
      color: black;
      text-decoration: none;
      cursor: pointer;
    }
  }
  .contact-header {
    margin-top: 20px;
    color: #000;
    padding: 24px;
    font-size: 24px;
    text-align: center;
  }
  .content {
    background-color: white;
    padding: 20px;
    border-radius: 5px;
    max-width: 600px;
    width: 100%;
  }
  form {
    font-family: 'Robot', sans-serif;
    margin-top: 10px;
    padding: 30px;
    font-size: 16px;
    .form-input {
      display: flex;
      justify-content: space-between;
      #form-left {
        flex: 1;
        margin-right: 10px;
        input {
          width: 100%;
          padding: 12px;
          border: 1px solid #ccc;
          border-radius: 4px;
          resize: vertical;
          font-size: 16px;
          outline: none;
          padding: 15px 5px;
          border: 1px solid #fff;
          border-bottom: 1px solid lightgray;
          width: 400px;
          margin-bottom: 20px;
          &:focus {
            border-bottom: 1px solid ${linkColor}; 
            transition-duration: 0.5s;
          }
        }
      }
      #form-right {
        flex: 1;
        margin-left: 30px;
        textarea {
          outline: none;
          border: 1px solid lightgray;
          padding: 10px;
          width: 400px;
          height: 190px;
          resize: none;
          overflow: auto;
          &:focus {
            border: 1px solid ${linkColor}; 
            transition-duration: 0.5s;
          }
        }
      }
    }
    .actions {
      margin-top: 20px;
      margin-bottom: 10px;
      display: flex;
      justify-content: center;
      span {
        color: #000;
        padding: 10px;
      }
      .send-button {
        width: 150px;
        padding: 15px;
        font-size: 16px;
        border: 1px solid #fff;
        border-radius: 1px;
        cursor: pointer;
        outline: none;
        &:hover {
          background-color: ${linkColor};
          letter-spacing: 3px;
          transition-duration: 0.5s;
          &:focus {
            background-color: ${linkColor};
          }
        }
      }
    }
  }
`;

export default ModalStyles;