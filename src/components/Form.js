import React, { useState } from "react";
import { Form, Button, Spinner, InputGroup } from "react-bootstrap";

const FormComponent = ({ handleSearch }) => {
  const [city, setCity] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await handleSearch(city);
      setCity("");
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <InputGroup className="mb-3">
        <Form.Control
          type="text"
          placeholder="Enter city"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          required
        />

        <Button variant="primary" type="submit">
          {loading ? (
            <>
              <Spinner
                as="span"
                animation="border"
                size="sm"
                role="status"
                aria-hidden="true"
              />
              <span className="visually-hidden">Loading...</span>
            </>
          ) : (
            "Get Weather"
          )}
        </Button>
      </InputGroup>
    </Form>
  );
};

export default FormComponent;
