import "../pages/Register.css"

const Register = () => {
  return (
    <div>
        <article className="form-container">
            <form action="">
                <h2>Register</h2>
                <label>
                    <span>firstname:</span>
                    <input type="text" />
                </label>
                <label>
                    <span>lastname:</span>
                    <input type="text" />
                </label>
                <label>
                    <span>email:</span>
                    <input type="email" />
                </label>
                <label>
                    <span>password:</span>
                    <input type="password" />
                </label>
                <label>
                    <span>gender:</span>
                    <select name="" id="">
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="other">Other</option>
                    </select>
                </label>
                <button>submit</button>
            </form>
        </article>
    </div>
  )
}

export default Register