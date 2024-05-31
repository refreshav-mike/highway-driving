// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level":
            case "level1":return tiles.createTilemap(hex`0a000a000205050101010101050703080c01010101010b06030b080101010101080603080d01010101010806030c08010101010108060308080101010101080603080b01010101010c0603080d0101010101080603080801010101010806040a0a01010101010a09`, img`
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
`, [myTiles.transparency16,sprites.vehicle.roadVertical,sprites.skillmap.islandTile0,sprites.skillmap.islandTile3,sprites.skillmap.islandTile6,sprites.skillmap.islandTile1,sprites.skillmap.islandTile5,sprites.skillmap.islandTile2,sprites.skillmap.islandTile4,sprites.skillmap.islandTile8,sprites.skillmap.islandTile7,sprites.castle.tileGrass2,sprites.castle.tileGrass1,sprites.castle.tileGrass3], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
