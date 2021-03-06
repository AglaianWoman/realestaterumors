
export const generateFeatureCollection = (listOfCoordinates) => {
  let listOfFeatures = listOfCoordinates.map(coordinates => {
    return ({
      "type": "Feature",
      "geometry": {
        "type": "Polygon",
        "coordinates": coordinates
      },
      "properties": {}
    })
  });

  return ({
    "type": "FeatureCollection",
    "features": listOfFeatures
  });
}

export const blocks = {
  listOfCoords1: [
    [[
      [ 153.0389662, -27.6346625 ],
      [ 153.0391664, -27.6347921 ],
      [ 153.0389074, -27.6350414 ],
      [ 153.0386738, -27.6348733 ],
      [ 153.0389662, -27.6346625 ]
    ]],
    [[
      [ 153.0388156, -27.6345107 ],
      [ 153.0389662, -27.6346625 ],
      [ 153.0386738, -27.6348733 ],
      [ 153.0386529, -27.6348583 ],
      [ 153.0384442, -27.6347092 ],
      [ 153.0388156, -27.6345107 ]
    ]],
    [[
      [ 153.0389074, -27.6350414 ],
      [ 153.0387186, -27.6352244 ],
      [ 153.0386752, -27.6352265 ],
      [ 153.038621, -27.6351843 ],
      [ 153.0384833, -27.6351398 ],
      [ 153.0386529, -27.6348583 ],
      [ 153.0386738, -27.6348733 ],
      [ 153.0389074, -27.6350414 ]
    ]],
  ],

  listOfCoords2: [
    [[
      [ 153.0389074, -27.6350414 ],
      [ 153.0387186, -27.6352244 ],
      [ 153.0386752, -27.6352265 ],
      [ 153.038621, -27.6351843 ],
      [ 153.0384833, -27.6351398 ],
      [ 153.0386529, -27.6348583 ],
      [ 153.0386738, -27.6348733 ],
      [ 153.0389074, -27.6350414 ]
    ]],
  ],

}
