import axios from "axios";

export const AnimalsApi = axios.create({
    baseURL: 'https://apiv3.iucnredlist.org/api/v3/species/category/cr?token=9bb4facb6d23f48efbf424bb05c0c1ef1cf6f468393bc745d42179ac4aca5fee'

})

export default AnimalsApi

