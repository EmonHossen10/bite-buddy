'use client'


function RegisterPage () {

    const handelRegister = async e => {
        e.preventDefault();

        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;


        console.log("Name:", name, "Email:", email, "Password:", password);

        const response = await fetch('/api/register', {
            method: 'POST',
            body: JSON.stringify({email, password}),
            headers: {'Content-Type': 'application/json'}
        });

    }

  return (
    <section className='bg-white h-screen '>
        <div className=''>
            <h1>Register</h1>
            <form className='' onSubmit={handelRegister}>
                <label>Name</label><br />
                <input className='' name='name' type='text'/><br />

                <label>Email</label><br />
                <input className='' name='email' type='email'/><br />

                <label>Password</label><br />
                <input className='' name='password' type='password'/><br />

                <button className="btn btn-primary">Register Naw!</button>
            </form>
        </div>
    </section>
  )
}

export default RegisterPage