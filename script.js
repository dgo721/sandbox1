$('#search').keyup(function(event) {
	var searchField = $('#search').val();
	var searchExp = new RegExp(searchField, "i");
	$.getJSON('data.json', function(data) {
		var output = '<ul class="searchresults">';
		$.each(data, function(key, val) {
			if ((val.name.search(searchExp) != -1) || (val.bio.search(searchExp) != -1)) {
				output += '<li>';
				output += '<h2>' + val.name + '</h2>';
				output += '<img src="images/' + val.shortname + '_tn.jpg" alt="' + val.name + '" />';
				output += '<p>' + val.bio + '</p>';
				output += '</li>';
			}
		});
		output += '</ul>';
		$('#update').html(output);
	}); //getJSON
});