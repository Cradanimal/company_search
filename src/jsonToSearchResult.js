const altName = 'Title Not Available';
const altDescription = 'Description Not Available';
const htmlRegex = /<\/?[^>]+(>|$)/g;


// Function to convert search results from Wikipedia
// shapes result data to comform with properties expected by the Company Component
export const formatWikipediaJson = data => {
    return data.map(result => {
        return {
            name: result.title || altName,
            description: result.snippet.replace(htmlRegex, "") || altDescription,
            id: `wikipedia${result.pageid}`
        }
    })
}

export const formatGithubJson = data => {
    return data.map(result => {
        return {
            name: result.name || altName,
            description: result.description || altDescription,
            id: `github${result.id}`,
            link: result.html_url
        }
    })
}