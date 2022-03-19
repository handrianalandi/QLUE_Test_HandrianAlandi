const improveJSON = (json) => {
    h=Object.keys(json[0])
    d=json.map(x=>Object.values(x))
    return {"h":h,"d":d};
}
module.exports={
    improveJSON
}