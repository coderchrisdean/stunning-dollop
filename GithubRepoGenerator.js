import React, { useState } from 'react';
import { Button, Container, Row, Col } from 'react-bootstrap';
import axios from 'axios';

const GithubRepoGenerator = () => {
  const [repoName, setRepoName] = useState('');

  const generateRepo = async () => {
    // Add your logic for generating a repository
  };

  return (
    <Container>
      <Row className="justify-content-center">
        <Col>
          <h1 className="text-center" style={{ color: 'darkred' }}>Github Repository Generator</h1>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col xs={12} md={8} lg={6}>
          <Button
            variant="dark"
            size="lg"
            block
            onClick={generateRepo}
            style={{ backgroundColor: 'darkred' }}
          >
            Generate New Repository
          </Button>
        </Col>
      </Row>
      {repoName && (
        <Row className="justify-content-center">
          <Col>
            <h3 className="text-center" style={{ color: 'darkgray' }}>Generated Repository: {repoName}</h3>
          </Col>
        </Row>
      )}
    </Container>
  );
};

export default GithubRepoGenerator;
