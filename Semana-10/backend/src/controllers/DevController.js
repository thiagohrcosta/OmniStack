const axios = require( 'axios' );
const Dev = require( '../models/Dev.js' );
const parseStringAsArray = require( '../utils/parseStringAsArray.js' )
;
module.exports ={ 
    async index ( request, response ) {
        const devs = await Dev.find();
        
        return response.json( devs );
    },

    async store ( request, response ) {
        const { github_username, techs, longitude, latitude } = request.body;

        let dev = await Dev.findOne( { github_username } );

        if ( !dev ){
            
            const apiResponse = await axios.get( `https://api.github.com/users/${ github_username }` );
    
        
            const { name = login, avatar_url, bio } = apiResponse.data;
                // aqui serão inseridos os dados de pesquisa, que foram filtrados a partir do {},
                // o response foi alterado para apiResponse
                // name = login,  caso o usuário não tenha um nome cadastrado, automatícamente busca-se seu login.
                   
            
            const techsArray = parseStringAsArray(techs);
    
            const location = {
                type: 'Point',
                coordinates: [longitude, latitude],
                };
        
                dev = await Dev.create( {
                github_username,
                name,
                avatar_url,
                bio,
                techs: techsArray,
                location
            })
        }
       
        return response.json(dev);
    }
};
