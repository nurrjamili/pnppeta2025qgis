var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '&nbsp;&middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_BatasPNP_1 = new ol.format.GeoJSON();
var features_BatasPNP_1 = format_BatasPNP_1.readFeatures(json_BatasPNP_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BatasPNP_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BatasPNP_1.addFeatures(features_BatasPNP_1);
var lyr_BatasPNP_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BatasPNP_1, 
                style: style_BatasPNP_1,
                popuplayertitle: 'Batas PNP',
                interactive: true,
                title: '<img src="styles/legend/BatasPNP_1.png" /> Batas PNP'
            });
var format_Bangunan_2 = new ol.format.GeoJSON();
var features_Bangunan_2 = format_Bangunan_2.readFeatures(json_Bangunan_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Bangunan_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Bangunan_2.addFeatures(features_Bangunan_2);
var lyr_Bangunan_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Bangunan_2, 
                style: style_Bangunan_2,
                popuplayertitle: 'Bangunan',
                interactive: true,
                title: '<img src="styles/legend/Bangunan_2.png" /> Bangunan'
            });
var format_fasilitas_3 = new ol.format.GeoJSON();
var features_fasilitas_3 = format_fasilitas_3.readFeatures(json_fasilitas_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_fasilitas_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_fasilitas_3.addFeatures(features_fasilitas_3);
var lyr_fasilitas_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_fasilitas_3, 
                style: style_fasilitas_3,
                popuplayertitle: 'fasilitas',
                interactive: true,
                title: '<img src="styles/legend/fasilitas_3.png" /> fasilitas'
            });
var format_Jalan_4 = new ol.format.GeoJSON();
var features_Jalan_4 = format_Jalan_4.readFeatures(json_Jalan_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Jalan_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Jalan_4.addFeatures(features_Jalan_4);
var lyr_Jalan_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Jalan_4, 
                style: style_Jalan_4,
                popuplayertitle: 'Jalan',
                interactive: true,
                title: '<img src="styles/legend/Jalan_4.png" /> Jalan'
            });
var format_titik_5 = new ol.format.GeoJSON();
var features_titik_5 = format_titik_5.readFeatures(json_titik_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_titik_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_titik_5.addFeatures(features_titik_5);
var lyr_titik_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_titik_5, 
                style: style_titik_5,
                popuplayertitle: 'titik',
                interactive: true,
                title: '<img src="styles/legend/titik_5.png" /> titik'
            });
var format_koridor_6 = new ol.format.GeoJSON();
var features_koridor_6 = format_koridor_6.readFeatures(json_koridor_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_koridor_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_koridor_6.addFeatures(features_koridor_6);
var lyr_koridor_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_koridor_6, 
                style: style_koridor_6,
                popuplayertitle: 'koridor',
                interactive: true,
                title: '<img src="styles/legend/koridor_6.png" /> koridor'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_BatasPNP_1.setVisible(true);lyr_Bangunan_2.setVisible(true);lyr_fasilitas_3.setVisible(true);lyr_Jalan_4.setVisible(true);lyr_titik_5.setVisible(true);lyr_koridor_6.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_BatasPNP_1,lyr_Bangunan_2,lyr_fasilitas_3,lyr_Jalan_4,lyr_titik_5,lyr_koridor_6];
lyr_BatasPNP_1.set('fieldAliases', {'id': 'id', 'nama': 'nama', });
lyr_Bangunan_2.set('fieldAliases', {'id': 'id', 'nama': 'nama', });
lyr_fasilitas_3.set('fieldAliases', {'id': 'id', 'Nama': 'Nama', 'Luas': 'Luas', });
lyr_Jalan_4.set('fieldAliases', {'id': 'id', });
lyr_titik_5.set('fieldAliases', {'id': 'id', 'nama': 'nama', });
lyr_koridor_6.set('fieldAliases', {'id': 'id', 'Panjang': 'Panjang', });
lyr_BatasPNP_1.set('fieldImages', {'id': 'TextEdit', 'nama': 'TextEdit', });
lyr_Bangunan_2.set('fieldImages', {'id': 'TextEdit', 'nama': 'TextEdit', });
lyr_fasilitas_3.set('fieldImages', {'id': 'TextEdit', 'Nama': 'TextEdit', 'Luas': 'TextEdit', });
lyr_Jalan_4.set('fieldImages', {'id': 'TextEdit', });
lyr_titik_5.set('fieldImages', {'id': 'TextEdit', 'nama': 'TextEdit', });
lyr_koridor_6.set('fieldImages', {'id': 'TextEdit', 'Panjang': '', });
lyr_BatasPNP_1.set('fieldLabels', {'id': 'no label', 'nama': 'no label', });
lyr_Bangunan_2.set('fieldLabels', {'id': 'no label', 'nama': 'no label', });
lyr_fasilitas_3.set('fieldLabels', {'id': 'no label', 'Nama': 'no label', 'Luas': 'no label', });
lyr_Jalan_4.set('fieldLabels', {'id': 'no label', });
lyr_titik_5.set('fieldLabels', {'id': 'header label - visible with data', 'nama': 'no label', });
lyr_koridor_6.set('fieldLabels', {'id': 'no label', 'Panjang': 'no label', });
lyr_koridor_6.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});