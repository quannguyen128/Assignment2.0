/*
<div class="form-group">
<label for="exampleInputEmail1">Email address</label>
<input type="email" class="form-control" id="exampleInputEmail1" placeholder="Enter email">
</div> 
*/

const FormInput = (props) => {
    return React.createElement('div', {className: "form-group"}, 
        [
            React.createElement('label', 
                                {
                                    for: "exampleInputEmail1"
                                }, 
                                "Email address"
            ),

            React.createElement('input', 
                                {
                                    className: "form-control",
                                    type: "email",
                                    id: "exampleInputEmail1",
                                    placeholder: "Enter Email"
                                },
            
            ),

            React.createElement('label',
                                {
                                    for: "Password"
                                },
                                "Password"
            ),

            React.createElement('input', 
                                {
                                    className: "form-control",
                                    type: "Password",
                                    id: "Password",
                                    placeholder: "Enter Password"
                                },

            ),

            React.createElement('button', 
                {
                    className: "btn", type: "submit"
                },
                "Submit"
            ),
        ]
    );
};  