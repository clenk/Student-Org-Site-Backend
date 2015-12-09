from django.core.exceptions import ValidationError
import re

XSSstuff = ("<", ">", "javascript:")

def XSScheck(value):
	if any(s in value for s in XSSstuff):
		raise ValidationError('string contains XSS code')
	elif re.match( r'\%[A-Ea-e0-9]{2}', value):
		raise ValidationError('string contains XSS code')

def isImg(value):
	if not re.match(r'^https?://(?:[a-z0-9\-]+\.)+[a-z]{2,6}(?:/[^/#?]+)+\.(?:jpg|gif|png)$', value):
		raise ValidationError('this is not an image from a URL')

def isDateFormat(value):
	if not re.match(r'^(?:(?:(?:0?[13578]|1[02]|(?:Jan|Mar|May|Jul|Aug|Oct|Dec))(\/|-|\.)31)\1|(?:(?:0?[1,3-9]|1[0-2]|(?:Jan|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec))(\/|-|\.)(?:29|30)\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:(?:0?2|(?:Feb))(\/|-|\.)(?:29)\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:(?:0?[1-9]|(?:Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep))|(?:1[0-2]|(?:Oct|Nov|Dec)))(\/|-|\.)(?:0?[1-9]|1\d|2[0-8])\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$', value):
		raise ValidationError('please put in format: mm/dd/yyyy')