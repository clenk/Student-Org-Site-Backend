class DisableCSRF(object):
	def process_request(self, req):
		setattr(req, '_dont_enforce_csrf_checks', True)