var cmd, content, position;
var prompt = $('#prompt_blink');
var before = $('#before');
var after = $('#after');
var t,pause,wait=0;
var old_line = "<div class='line'><span class='prompt'>karts-$ </span><span>" + $('#clipboard').val(); + "</span></div>";
var o/p = "<div class='output'><span class='response'>" + response + "</span></div>";
var credentials = [];

function blink()
{
	if(wait==0)
	{
		$('#prompt_blink').toggleClass('vis').toggleClass('invi');
		t = setTimeout("blink()",700);
	}
}

function build_command(content,position)
{
	$('#before').html(content.substr(0,position));
	$('#after').html(content.substr(position+1,content.length-1));
	$('#prompt_blink').html(content.charAt(position));
}

function next_line()
{
	var response;
	//$.ajax('ssh.php','GET');
	$('#clipboard').val('');
	$('div.line1').before(old_line);
	//$('div.line1').before(
}

function get_data(param)
{
	$('#before').html(param);
	if(param == "password:")
		$('#after').css('color', 'black');
	$('#clipboard').keyup(function(event.which) {
		if(event.which==37)
			$(this).prop('selectionStart') = $(this).val().length;
		else if(event.which==13)
		{
			next_line();
			$('#after').css('color', '#22FF08');
			credentials.push($(this).val());
		}
	});
}

function login()
{
	$.post()
}

$(document).ready(function() {
	$('div.line1').before("<div class='line'><span class='prompt'>karts-$ </span><span>Login</span><br/><span>Enter your details</span></div>");
	$('#clipboard').focus();
	get_data('domain:');
	get_data('username:');
	get_data('password:');
	login();
	$('#terminal').click(function() {
		$('#clipboard').focus();
		blink();
	});

	$('#clipboard').keydown(function() {
	content = $(this).val();
	clearTimeout(t);
	clearTimeout(pause);
	wait = 1;
	$('#prompt_blink').addClass('vis').removeClass('invi');
		var position = $('#clipboard').prop("selectionStart");
		if(position<=content.length-1)
			build_command(content,position);
		else
		{
			$('#before').html(content);
			$('#prompt_blink').html('');
			$('#after').html('');
		}
		if(event.which==13)
			next_line();
	});

	$('#clipboard').keyup(function() {
	content = $(this).val();
	if(wait==1)
	{
		wait = 0;
		pause = setTimeout("blink()",700);

	}
		var position = $('#clipboard').prop("selectionStart");
		if(position<=content.length-1)
			build_command(content,position);
		else
		{
			$('#before').html(content);
			$('#prompt_blink').html('');
			$('#after').html('');
		}
	if($('#prompt_blink').html()=='')
		$('#prompt_blink').css('width','8px');
	else
		$('#prompt_blink').css('width','auto');
	});

});
