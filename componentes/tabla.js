Vue.component('tabla', {
    template: //html
    `

        <table class="table table table-dark">
    
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">
                        Tipos de datos
                    </th>
                    <th scope="col">
                        Datos
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th scope="row">1</th>
                    <td>
                        <p>Array</p>
                    </td>
                    <td>
                        <ul>
                            <li v-for="item in lista">{{item}}</li>
                        </ul>
                    </td>
                </tr>
                <tr>
                    <th scope="row">2</th>
                    <td>
                        <p>String</p>
                    </td>
                    <td>
                        <p>{{texto}}</p>
                    </td>
                </tr>
                <tr>
                    <th scope="row">3</th>
                    <td>
                        Boolean
                    </td>
                    <td>
                        {{booleano}}
                    </td>
                </tr>
                <tr>
                    <th scope="row">4</th>
                    <td>
                        Number
                    </td>
                    <td>
                        {{numero}}
                    </td>
                </tr>
                <tr>
                    <th scope="row">5</th>
                    <td>
                        Object
                    </td>
                    <td>
                        {{objeto.hola}},{{objeto.nombre}}
                    </td>
                </tr>
                <tr>
                    <th scope="row">6</th>
                    <td>
                        Date
                    </td>
                    <td>
                        {{fecha}}
                    </td>
                </tr>
            </tbody>
        </table>

    `,
    props: {
        fondo: String,
        booleano: Boolean,
        lista: {
            type: Array,
            required:true
        },
        texto: String,
        numero: Number,
        objeto: Object,
        fecha: {
            type: Date,
            default: function () { return new Date() 
                    }
        }
    }

});

