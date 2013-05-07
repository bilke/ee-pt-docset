if (typeof document.querySelectorAll != 'undefined')
{
	function findToggle(dt)
	{
		return dt.querySelector('.toggle');
	}

	function showDefinition(dt)
	{
		dt.classList.add('open');
		findToggle(dt).setAttribute('title', 'Hide');
	}

	function hideDefinition(dt)
	{
		dt.classList.remove('open');
		findToggle(dt).setAttribute('title', 'Show');
	}

	function toggleDefinition()
	{
		if (this.classList.contains('open'))
		{
			hideDefinition(this);
		}
		else
		{
			showDefinition(this);
		}
	};

	function showAllDefinitions()
	{
		var dl = this.parentNode.nextSibling,
			closedDts = dl.querySelectorAll('dt:not(.open)');

		for (var i = 0; i < closedDts.length; i++)
		{
			showDefinition(closedDts[i]);
		}
	}

	function hideAllDefinitions()
	{
		var dl = this.parentNode.nextSibling,
			openDts = dl.querySelectorAll('dt.open');

		for (var i = 0; i < openDts.length; i++)
		{
			hideDefinition(openDts[i]);
		}
	}

	var dls = document.getElementsByTagName('dl');

	for (var i = 0; i < dls.length; i++)
	{
		// Add the toggle all buttons
		var dl = dls[i],
			toggleAll = document.createElement('div');

		dl.parentNode.insertBefore(toggleAll, dl);
		toggleAll.className = 'toggle-all';

		var showAll = document.createElement('div'),
			hideAll = document.createElement('div');

		toggleAll.appendChild(showAll);
		toggleAll.appendChild(hideAll);

		showAll.className = 'show-all';
		hideAll.className = 'hide-all';

		showAll.setAttribute('title', 'Show all');
		hideAll.setAttribute('title', 'Hide all');

		showAll.addEventListener('click', showAllDefinitions);
		hideAll.addEventListener('click', hideAllDefinitions);

		// Deal with the individual <dt>'s
		var dts = dl.getElementsByTagName('dt');

		for (var j = 0; j < dts.length; j++)
		{
			var dt = dts[j],
				toggle = document.createElement('div');

			dt.insertBefore(toggle, dt.firstChild);
			toggle.className = 'toggle';
			toggle.setAttribute('title', 'Show');

			dt.addEventListener('click', toggleDefinition);
		}
	}
}
