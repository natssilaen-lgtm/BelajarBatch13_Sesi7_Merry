const assert = require('assert');
const { expect } = require('chai');


// beforeEach(() => {
    //register new data
    // 1. user:" Mahela", Password:"mahela123"
    // 2. User: " Dede", Password:"dede123"

describe('Fitur Login', () => {
//    let.token
    it('Get API Login', async () => {
        const response = await fetch ('https://belajar-bareng.onrender.com/');

        // Assert Node Fetch
      //  assert.strictEqual(response.status, 200);


        // Assert Chai
        expect(response.status).to.equal(200);
      //  expect(response.status).toBe(200);
      //  expect(response.data).toHaveProperty('token');
        // User: Zizah
    });


    //it.skip('Login Berhasil dengan kredensial yang valid', async () => {
      //  const response = await login('user_valid', 'password_valid');
        //expect(response.status).toBe(200);
        //expect(response.data).toHaveProperty('token');
    });


    it('Ensure success login', async () => {
        const response = await fetch('https://belajar-bareng.onrender.com/api/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                username: 'admin',
                password: 'admin',
        })

        });
        
       // expect(response.status).toBe(200);
       // expect(response.data).toHaveProperty('token');

      //  expect(response.status).to.equal(200)
        const data = await response.json();
        // console.log(data)
        expect(response.status).to.equal(200);
        //expect(data).to.have.property('token');
       // expect(data.token).not.to.be.empty;

        //token = data.token;
      //  console.log(token)

    }
)
    
