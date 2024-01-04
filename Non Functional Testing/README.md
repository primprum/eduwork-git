## Understanding Non Functional Testing

As the name implies, it doesn't deal with testing the functional aspect of a software.

Non-functional testing assesses aspects of a system that are not related to specific behaviors or functions but instead focus on qualities such as:

- **Performance**
- **Reliability**
- **Usability**
- **Scalability**

<br>

### Performance Testing Focuses:

#### Responsiveness:

This measures how quickly the system responds to user interactions.

It includes assessing the response time for various operations and ensuring that it falls within acceptable limits.

#### [Responsiveness Example]:

**_Checking how quickly a web page loads or how fast a transaction is processed._**

#### Throughput:

This assesses the system's capacity to handle a specific load.

It involves measuring the number of transactions or operations the system can handle in a given time.

#### [Throughput Example]:

**_Determining the maximum number of simultaneous users the system can support without degradation._**

#### Scalability:

This examines how well the system can scale up or down in terms of performance as the workload changes.

#### [Scalability Example]:

**_Testing if the response time remains acceptable as the number of concurrent users increases._**

<br>

### Where's the role of Load Testing or Stress Testing?

Load testing is a type of performance testing.

Performance testing is a broad category that includes various types of testing to evaluate how a system performs under different conditions.

Load testing specifically focuses on **_evaluating the system's ability to handle a specific load or volume of concurrent users and transactions_**, meanwhile Stress testing focuses to **_determine the system's robustness by subjecting it to extreme or beyond-normal load conditions._**

<br>

### Various Performance Testing Categories:

#### Load Testing:

Evaluate the system's ability to handle a specific load or volume of concurrent users and transactions.

#### [Load Testing Example]:

**_Simulate a scenario where a website experiences a peak load of 10,000 simultaneous users attempting to make purchases during a flash sale._**

> Measure the response time, throughput, and system stability under this load.

<br>

#### Stress Testing:

Determine the system's robustness by subjecting it to extreme or beyond-normal load conditions.

#### [Stress Testing Example]:

**_Gradually increase the number of concurrent users on an e-commerce website until the system reaches its breaking point._**

> Measure how the system behaves under stress, including its ability to recover and continue functioning.

<br>

#### Volume Testing:

Assess the system's scalability by testing its performance with a large volume of data.

#### [Volume Testing Example]:

**_Populate a database with a significant amount of data, such as one million records._**

> Measure how the system responds in terms of response time, database performance, and overall system behavior.

<br>

#### Scalability Testing:

Evaluate how well the system can scale up or down in terms of performance as the workload changes.

#### [Scalability Testing Example]:

Gradually increase the number of concurrent users on a web application and assess its performance at different levels of load.

> Identify the point at which the system starts to degrade or exhibit performance issues.

<br>

#### Endurance Testing:

Assess the system's stability and performance over an extended period under normal or expected loads.

#### [Endurance Testing Example]:

Run a continuous simulation of user interactions on a banking system for 24 hours, including transactions, account inquiries, and other typical operations.

> Monitor for memory leaks, resource leaks, and assess the system's reliability over the extended duration.
