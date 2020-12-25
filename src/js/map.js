function initMap() {

	// Create a new StyledMapType for Black & White map
        var styledMapType = new google.maps.StyledMapType( [
				{
				  "elementType": "geometry",
				  "stylers": [
					 {
						"color": "#f5f5f5"
					 }
				  ]
				},
				{
				  "elementType": "labels.icon",
				  "stylers": [
					 {
						"visibility": "off"
					 }
				  ]
				},
				{
				  "elementType": "labels.text.fill",
				  "stylers": [
					 {
						"color": "#616161"
					 }
				  ]
				},
				{
				  "elementType": "labels.text.stroke",
				  "stylers": [
					 {
						"color": "#f5f5f5"
					 }
				  ]
				},
				{
				  "featureType": "administrative.land_parcel",
				  "elementType": "labels.text.fill",
				  "stylers": [
					 {
						"color": "#bdbdbd"
					 }
				  ]
				},
				{
				  "featureType": "poi",
				  "elementType": "geometry",
				  "stylers": [
					 {
						"color": "#eeeeee"
					 }
				  ]
				},
				{
				  "featureType": "poi",
				  "elementType": "labels.text.fill",
				  "stylers": [
					 {
						"color": "#757575"
					 }
				  ]
				},
				{
				  "featureType": "poi.park",
				  "elementType": "geometry",
				  "stylers": [
					 {
						"color": "#e5e5e5"
					 }
				  ]
				},
				{
				  "featureType": "poi.park",
				  "elementType": "labels.text.fill",
				  "stylers": [
					 {
						"color": "#9e9e9e"
					 }
				  ]
				},
				{
				  "featureType": "road",
				  "elementType": "geometry",
				  "stylers": [
					 {
						"color": "#ffffff"
					 }
				  ]
				},
				{
				  "featureType": "road.arterial",
				  "elementType": "labels.text.fill",
				  "stylers": [
					 {
						"color": "#757575"
					 }
				  ]
				},
				{
				  "featureType": "road.highway",
				  "elementType": "geometry",
				  "stylers": [
					 {
						"color": "#dadada"
					 }
				  ]
				},
				{
				  "featureType": "road.highway",
				  "elementType": "labels.text.fill",
				  "stylers": [
					 {
						"color": "#616161"
					 }
				  ]
				},
				{
				  "featureType": "road.local",
				  "elementType": "labels.text.fill",
				  "stylers": [
					 {
						"color": "#9e9e9e"
					 }
				  ]
				},
				{
				  "featureType": "transit.line",
				  "elementType": "geometry",
				  "stylers": [
					 {
						"color": "#e5e5e5"
					 }
				  ]
				},
				{
				  "featureType": "transit.station",
				  "elementType": "geometry",
				  "stylers": [
					 {
						"color": "#eeeeee"
					 }
				  ]
				},
				{
				  "featureType": "water",
				  "elementType": "geometry",
				  "stylers": [
					 {
						"color": "#c9c9c9"
					 }
				  ]
				},
				{
				  "featureType": "water",
				  "elementType": "labels.text.fill",
				  "stylers": [
					 {
						"color": "#9e9e9e"
					 }
				  ]
				}
			], {name: 'Styled Map'});
	
	var customIcon = 'img/icon/marker.svg';

	if ($("#educational-center-1").length > 0){
		var point1 = {lat: 55.770287034738914,	lng: 37.37286972052501};
		var map1 = new google.maps.Map(document.getElementById('educational-center-1'), {
			zoom: 15,
			center: point1,
			mapTypeControl: false,
			streetViewControl: false,
		});
		//Associate the styled map with the MapTypeId and set it to display.
		map1.mapTypes.set('styled_map', styledMapType);
		map1.setMapTypeId('styled_map');

		var marker1 = new google.maps.Marker({
			position: point1,
			map: map1,
			icon: customIcon,
		});
	}

	if ($("#educational-center-2").length > 0){
		var point2 = {lat: 55.79420438881734,	lng: 37.3975865273987};
		var map2 = new google.maps.Map(document.getElementById('educational-center-2'), {
			zoom: 15,
			center: point2,
			mapTypeControl: false,
			streetViewControl: false,
		});
		//Associate the styled map with the MapTypeId and set it to display.
		map2.mapTypes.set('styled_map', styledMapType);
		map2.setMapTypeId('styled_map');

		var marker2 = new google.maps.Marker({
			position: point2,
			map: map2,
			icon: customIcon,
		});
	}

	if ($("#map-1").length > 0){
		var point3 = {lat: 56.83192476610851,	lng: 60.61262956975717};
		var map3 = new google.maps.Map(document.getElementById('map-1'), {
			zoom: 15,
			center: point3,
			mapTypeControl: false,
			streetViewControl: false,
		});
		//Associate the styled map with the MapTypeId and set it to display.
		map3.mapTypes.set('styled_map', styledMapType);
		map3.setMapTypeId('styled_map');

		var marker3 = new google.maps.Marker({
			position: point3,
			map: map3,
			icon: customIcon,
		});
	}

	if ($("#map-2").length > 0){
		var point4 = {lat: 55.716043081213066,	lng: 37.694926856232264};
		var map4 = new google.maps.Map(document.getElementById('map-2'), {
			zoom: 15,
			center: point4,
			mapTypeControl: false,
			streetViewControl: false,
		});
		//Associate the styled map with the MapTypeId and set it to display.
		map4.mapTypes.set('styled_map', styledMapType);
		map4.setMapTypeId('styled_map');

		var marker4 = new google.maps.Marker({
			position: point4,
			map: map4,
			icon: customIcon,
		});
	}

	if ($("#main-map").length > 0){
		function init() {
				
			// Set coordinates and content for points
			const markersData = [
			{ position: { lat: 55.74495565444388, lng: 37.601296100922035 }, content: '<div class="main-map__object"><div class="main-map__caption">Nrc-drive</div><div class="main-map__desc">Студия детейлинга, защиты и стайлинга автомобилей</div><div class="main-map__items"><div class="main-map__item"><div class="main-map__icon"><img src="img/main-map/phone.svg" alt=""></div><div class="main-map__box"><a href="tel:+7 (968) 860-90-00" class="main-map__link"><strong>+7 (968) 860-90-00</strong></a></div></div><div class="main-map__item"><div class="main-map__icon"><img src="img/main-map/location.svg" alt=""></div><div class="main-map__box"><div class="main-map__link">ул. Угрешская, 2 строение 53</div></div></div><div class="main-map__item"><div class="main-map__icon"><img src="img/main-map/world.svg" alt=""></div><div class="main-map__box"><a href="www.hells-lucky.ru" class="main-map__link">www.hells-lucky.ru</a></div></div></div><a href="#" class="main-map__btn link">подробнее <img src="img/installation-centers/arrow-link.svg" alt=""></a></div>' },
			{ position: { lat: 55.85996199029581, lng: 37.36783663711226 }, content: '<div class="main-map__object"><div class="main-map__caption">Nrc-drive</div><div class="main-map__desc">Студия детейлинга, защиты и стайлинга автомобилей</div><div class="main-map__items"><div class="main-map__item"><div class="main-map__icon"><img src="img/main-map/phone.svg" alt=""></div><div class="main-map__box"><a href="tel:+7 (968) 860-90-00" class="main-map__link"><strong>+7 (968) 860-90-00</strong></a></div></div><div class="main-map__item"><div class="main-map__icon"><img src="img/main-map/location.svg" alt=""></div><div class="main-map__box"><div class="main-map__link">ул. Угрешская, 2 строение 53</div></div></div><div class="main-map__item"><div class="main-map__icon"><img src="img/main-map/world.svg" alt=""></div><div class="main-map__box"><a href="www.hells-lucky.ru" class="main-map__link">www.hells-lucky.ru</a></div></div></div><a href="#" class="main-map__btn link">подробнее <img src="img/installation-centers/arrow-link.svg" alt=""></a></div>' },
			{ position: { lat: 55.87614363294764, lng: 37.555977499123664 }, content: '<div class="main-map__object"><div class="main-map__caption">Nrc-drive</div><div class="main-map__desc">Студия детейлинга, защиты и стайлинга автомобилей</div><div class="main-map__items"><div class="main-map__item"><div class="main-map__icon"><img src="img/main-map/phone.svg" alt=""></div><div class="main-map__box"><a href="tel:+7 (968) 860-90-00" class="main-map__link"><strong>+7 (968) 860-90-00</strong></a></div></div><div class="main-map__item"><div class="main-map__icon"><img src="img/main-map/location.svg" alt=""></div><div class="main-map__box"><div class="main-map__link">ул. Угрешская, 2 строение 53</div></div></div><div class="main-map__item"><div class="main-map__icon"><img src="img/main-map/world.svg" alt=""></div><div class="main-map__box"><a href="www.hells-lucky.ru" class="main-map__link">www.hells-lucky.ru</a></div></div></div><a href="#" class="main-map__btn link">подробнее <img src="img/installation-centers/arrow-link.svg" alt=""></a></div>' },
			{ position: { lat: 55.90309805789278, lng: 37.645241411756814 }, content: '<div class="main-map__object"><div class="main-map__caption">Nrc-drive</div><div class="main-map__desc">Студия детейлинга, защиты и стайлинга автомобилей</div><div class="main-map__items"><div class="main-map__item"><div class="main-map__icon"><img src="img/main-map/phone.svg" alt=""></div><div class="main-map__box"><a href="tel:+7 (968) 860-90-00" class="main-map__link"><strong>+7 (968) 860-90-00</strong></a></div></div><div class="main-map__item"><div class="main-map__icon"><img src="img/main-map/location.svg" alt=""></div><div class="main-map__box"><div class="main-map__link">ул. Угрешская, 2 строение 53</div></div></div><div class="main-map__item"><div class="main-map__icon"><img src="img/main-map/world.svg" alt=""></div><div class="main-map__box"><a href="www.hells-lucky.ru" class="main-map__link">www.hells-lucky.ru</a></div></div></div><a href="#" class="main-map__btn link">подробнее <img src="img/installation-centers/arrow-link.svg" alt=""></a></div>' },
			{ position: { lat: 55.79053570392664, lng: 37.5202719340704 }, content: '<div class="main-map__object"><div class="main-map__caption">Nrc-drive</div><div class="main-map__desc">Студия детейлинга, защиты и стайлинга автомобилей</div><div class="main-map__items"><div class="main-map__item"><div class="main-map__icon"><img src="img/main-map/phone.svg" alt=""></div><div class="main-map__box"><a href="tel:+7 (968) 860-90-00" class="main-map__link"><strong>+7 (968) 860-90-00</strong></a></div></div><div class="main-map__item"><div class="main-map__icon"><img src="img/main-map/location.svg" alt=""></div><div class="main-map__box"><div class="main-map__link">ул. Угрешская, 2 строение 53</div></div></div><div class="main-map__item"><div class="main-map__icon"><img src="img/main-map/world.svg" alt=""></div><div class="main-map__box"><a href="www.hells-lucky.ru" class="main-map__link">www.hells-lucky.ru</a></div></div></div><a href="#" class="main-map__btn link">подробнее <img src="img/installation-centers/arrow-link.svg" alt=""></a></div>' },
			{ position: { lat: 55.681518575325114, lng: 37.495552696725845 }, content: '<div class="main-map__object"><div class="main-map__caption">Nrc-drive</div><div class="main-map__desc">Студия детейлинга, защиты и стайлинга автомобилей</div><div class="main-map__items"><div class="main-map__item"><div class="main-map__icon"><img src="img/main-map/phone.svg" alt=""></div><div class="main-map__box"><a href="tel:+7 (968) 860-90-00" class="main-map__link"><strong>+7 (968) 860-90-00</strong></a></div></div><div class="main-map__item"><div class="main-map__icon"><img src="img/main-map/location.svg" alt=""></div><div class="main-map__box"><div class="main-map__link">ул. Угрешская, 2 строение 53</div></div></div><div class="main-map__item"><div class="main-map__icon"><img src="img/main-map/world.svg" alt=""></div><div class="main-map__box"><a href="www.hells-lucky.ru" class="main-map__link">www.hells-lucky.ru</a></div></div></div><a href="#" class="main-map__btn link">подробнее <img src="img/installation-centers/arrow-link.svg" alt=""></a></div>' },
			{ position: { lat: 55.59936181486848, lng: 37.72901216053562 }, content: '<div class="main-map__object"><div class="main-map__caption">Nrc-drive</div><div class="main-map__desc">Студия детейлинга, защиты и стайлинга автомобилей</div><div class="main-map__items"><div class="main-map__item"><div class="main-map__icon"><img src="img/main-map/phone.svg" alt=""></div><div class="main-map__box"><a href="tel:+7 (968) 860-90-00" class="main-map__link"><strong>+7 (968) 860-90-00</strong></a></div></div><div class="main-map__item"><div class="main-map__icon"><img src="img/main-map/location.svg" alt=""></div><div class="main-map__box"><div class="main-map__link">ул. Угрешская, 2 строение 53</div></div></div><div class="main-map__item"><div class="main-map__icon"><img src="img/main-map/world.svg" alt=""></div><div class="main-map__box"><a href="www.hells-lucky.ru" class="main-map__link">www.hells-lucky.ru</a></div></div></div><a href="#" class="main-map__btn link">подробнее <img src="img/installation-centers/arrow-link.svg" alt=""></a></div>' },
			{ position: { lat: 55.59625818524957, lng: 37.734505324389964 }, content: '<div class="main-map__object"><div class="main-map__caption">Nrc-drive</div><div class="main-map__desc">Студия детейлинга, защиты и стайлинга автомобилей</div><div class="main-map__items"><div class="main-map__item"><div class="main-map__icon"><img src="img/main-map/phone.svg" alt=""></div><div class="main-map__box"><a href="tel:+7 (968) 860-90-00" class="main-map__link"><strong>+7 (968) 860-90-00</strong></a></div></div><div class="main-map__item"><div class="main-map__icon"><img src="img/main-map/location.svg" alt=""></div><div class="main-map__box"><div class="main-map__link">ул. Угрешская, 2 строение 53</div></div></div><div class="main-map__item"><div class="main-map__icon"><img src="img/main-map/world.svg" alt=""></div><div class="main-map__box"><a href="www.hells-lucky.ru" class="main-map__link">www.hells-lucky.ru</a></div></div></div><a href="#" class="main-map__btn link">подробнее <img src="img/installation-centers/arrow-link.svg" alt=""></a></div>' },
			{ position: { lat: 55.722532363087346, lng: 37.66858735813779 }, content: '<div class="main-map__object"><div class="main-map__caption">Nrc-drive</div><div class="main-map__desc">Студия детейлинга, защиты и стайлинга автомобилей</div><div class="main-map__items"><div class="main-map__item"><div class="main-map__icon"><img src="img/main-map/phone.svg" alt=""></div><div class="main-map__box"><a href="tel:+7 (968) 860-90-00" class="main-map__link"><strong>+7 (968) 860-90-00</strong></a></div></div><div class="main-map__item"><div class="main-map__icon"><img src="img/main-map/location.svg" alt=""></div><div class="main-map__box"><div class="main-map__link">ул. Угрешская, 2 строение 53</div></div></div><div class="main-map__item"><div class="main-map__icon"><img src="img/main-map/world.svg" alt=""></div><div class="main-map__box"><a href="www.hells-lucky.ru" class="main-map__link">www.hells-lucky.ru</a></div></div></div><a href="#" class="main-map__btn link">подробнее <img src="img/installation-centers/arrow-link.svg" alt=""></a></div>' },
			{ position: { lat: 55.72330579446594, lng: 37.697426468373116 }, content: '<div class="main-map__object"><div class="main-map__caption">Nrc-drive</div><div class="main-map__desc">Студия детейлинга, защиты и стайлинга автомобилей</div><div class="main-map__items"><div class="main-map__item"><div class="main-map__icon"><img src="img/main-map/phone.svg" alt=""></div><div class="main-map__box"><a href="tel:+7 (968) 860-90-00" class="main-map__link"><strong>+7 (968) 860-90-00</strong></a></div></div><div class="main-map__item"><div class="main-map__icon"><img src="img/main-map/location.svg" alt=""></div><div class="main-map__box"><div class="main-map__link">ул. Угрешская, 2 строение 53</div></div></div><div class="main-map__item"><div class="main-map__icon"><img src="img/main-map/world.svg" alt=""></div><div class="main-map__box"><a href="www.hells-lucky.ru" class="main-map__link">www.hells-lucky.ru</a></div></div></div><a href="#" class="main-map__btn link">подробнее <img src="img/installation-centers/arrow-link.svg" alt=""></a></div>' },
			];
			
			// Custom icons
			const icon = 'img/icon/marker.svg';
			const iconActive = 'img/icon/marker-active.svg';
	
			// Display a map on the page
			const map = new google.maps.Map(document.getElementById('main-map'), {
				zoom: 10,
				center: markersData[0].position,
				mapTypeControl: false,
				streetViewControl: false,
			});
	
			// Associate the styled map with the MapTypeId and set it to display
			map.mapTypes.set('styled_map', styledMapType);
			map.setMapTypeId('styled_map');
	
			const setActiveIcon = marker => markers.forEach(n => n.setIcon(n === marker ? iconActive : icon));
	
			const infoWindow = new google.maps.InfoWindow({
				// set window under the marker
				pixelOffset: new google.maps.Size(0, 210),
			});
			infoWindow.addListener('closeclick', () => setActiveIcon(null));
	
			const markers = markersData.map(({
				position,
				content
			}) => {
				const marker = new google.maps.Marker({
					position,
					map,
					icon
				});
	
				marker.addListener('click', () => {
					setActiveIcon(marker);
					infoWindow.setContent(`<div class="info-window-content">${content}</div>`);
					infoWindow.open(map, marker);
				});
	
				return marker;
			});
		}
	
		google.maps.event.addDomListener(window, 'load', init);
	}

	if ($("#main-map-service").length > 0){
		function init() {
				
			// Set coordinates and content for points
			const markersData = [
			{ position: { lat: 55.74495565444388, lng: 37.601296100922035 }, content: '<div class="main-map__object"><div class="main-map__caption">Nrc-drive</div><div class="main-map__desc">Студия детейлинга, защиты и стайлинга автомобилей</div><div class="main-map__items"><div class="main-map__item"><div class="main-map__icon"><img src="img/main-map/phone.svg" alt=""></div><div class="main-map__box"><a href="tel:+7 (968) 860-90-00" class="main-map__link"><strong>+7 (968) 860-90-00</strong></a></div></div><div class="main-map__item"><div class="main-map__icon"><img src="img/main-map/location.svg" alt=""></div><div class="main-map__box"><div class="main-map__link">ул. Угрешская, 2 строение 53</div></div></div><div class="main-map__item"><div class="main-map__icon"><img src="img/main-map/world.svg" alt=""></div><div class="main-map__box"><a href="www.hells-lucky.ru" class="main-map__link">www.hells-lucky.ru</a></div></div></div><a href="#" class="main-map__btn link">подробнее <img src="img/installation-centers/arrow-link.svg" alt=""></a></div>' },
			];
			
			// Custom icons
			const icon = 'img/icon/marker.svg';
			const iconActive = 'img/icon/marker-active.svg';
	
			// Display a map on the page
			const map = new google.maps.Map(document.getElementById('main-map-service'), {
				zoom: 10,
				center: markersData[0].position,
				mapTypeControl: false,
				streetViewControl: false,
			});
	
			// Associate the styled map with the MapTypeId and set it to display
			map.mapTypes.set('styled_map', styledMapType);
			map.setMapTypeId('styled_map');
	
			const setActiveIcon = marker => markers.forEach(n => n.setIcon(n === marker ? iconActive : icon));
	
			const infoWindow = new google.maps.InfoWindow({
				// set window under the marker
				pixelOffset: new google.maps.Size(0, 210),
			});
			infoWindow.addListener('closeclick', () => setActiveIcon(null));
	
			const markers = markersData.map(({
				position,
				content
			}) => {
				const marker = new google.maps.Marker({
					position,
					map,
					icon
				});
	
				marker.addListener('click', () => {
					setActiveIcon(marker);
					infoWindow.setContent(`<div class="info-window-content">${content}</div>`);
					infoWindow.open(map, marker);
				});
	
				return marker;
			});
		}
	
		google.maps.event.addDomListener(window, 'load', init);
	}

	if ($("#where-buy-map-toning").length > 0){
		function init() {
				
			// Set coordinates and content for points
			const markersData = [
			{ position: { lat: 55.74495565444388, lng: 37.601296100922035 } },
			{ position: { lat: 55.85996199029581, lng: 37.36783663711226 } },
			{ position: { lat: 55.87614363294764, lng: 37.555977499123664 } },
			{ position: { lat: 55.90309805789278, lng: 37.645241411756814 } },
			{ position: { lat: 55.79053570392664, lng: 37.5202719340704 } },
			];
			
			// Custom icons
			const icon = 'img/icon/marker.svg';
			const iconActive = 'img/icon/marker-active.svg';
	
			// Display a map on the page
			const map = new google.maps.Map(document.getElementById('where-buy-map-toning'), {
				zoom: 10,
				center: markersData[0].position,
				mapTypeControl: false,
				streetViewControl: false,
			});
	
			// Associate the styled map with the MapTypeId and set it to display
			map.mapTypes.set('styled_map', styledMapType);
			map.setMapTypeId('styled_map');
	
			const setActiveIcon = marker => markers.forEach(n => n.setIcon(n === marker ? iconActive : icon));
	
			const infoWindow = new google.maps.InfoWindow({
				// set window under the marker
				pixelOffset: new google.maps.Size(0, 210),
			});
			infoWindow.addListener('closeclick', () => setActiveIcon(null));
	
			const markers = markersData.map(({
				position,
				content
			}) => {
				const marker = new google.maps.Marker({
					position,
					map,
					icon
				});
	
				marker.addListener('click', () => {
					setActiveIcon(marker);
				});
	
				return marker;
			});
		}
	
		google.maps.event.addDomListener(window, 'load', init);
	}

	if ($("#where-buy-map-antigravel").length > 0){
		function init() {
				
			// Set coordinates and content for points
			const markersData = [
			{ position: { lat: 55.681518575325114, lng: 37.495552696725845 } },
			{ position: { lat: 55.59936181486848, lng: 37.72901216053562 } },
			{ position: { lat: 55.59625818524957, lng: 37.734505324389964 } },
			{ position: { lat: 55.722532363087346, lng: 37.66858735813779 } },
			{ position: { lat: 55.72330579446594, lng: 37.697426468373116 } },
			];
			
			// Custom icons
			const icon = 'img/icon/marker.svg';
			const iconActive = 'img/icon/marker-active.svg';
	
			// Display a map on the page
			const map = new google.maps.Map(document.getElementById('where-buy-map-antigravel'), {
				zoom: 10,
				center: markersData[0].position,
				mapTypeControl: false,
				streetViewControl: false,
			});
	
			// Associate the styled map with the MapTypeId and set it to display
			map.mapTypes.set('styled_map', styledMapType);
			map.setMapTypeId('styled_map');
	
			const setActiveIcon = marker => markers.forEach(n => n.setIcon(n === marker ? iconActive : icon));
	
			const infoWindow = new google.maps.InfoWindow({
				// set window under the marker
				pixelOffset: new google.maps.Size(0, 210),
			});
			infoWindow.addListener('closeclick', () => setActiveIcon(null));
	
			const markers = markersData.map(({
				position,
				content
			}) => {
				const marker = new google.maps.Marker({
					position,
					map,
					icon
				});
	
				marker.addListener('click', () => {
					setActiveIcon(marker);
				});
	
				return marker;
			});
		}
	
		google.maps.event.addDomListener(window, 'load', init);
	}

}

