Rails.application.config.middleware.use OmniAuth::Builder do
  # provider :google_oauth2, ENV["GOOGLE_CLIENT_ID"], ENV["GOOGLE_CLIENT_SECRET"],
  #   {
  #     :name => "google",
  #     :scope => 'https://www.googleapis.com/auth/userinfo.email',
  #     :access_type => 'offline',
  #     :prompt => "select_account",
  #     :image_aspect_ratio => "square",
  #     :image_size => 50
  #   }
  config.omniauth :facebook, "GOOGLE_CLIENT_ID", "GOOGLE_CLIENT_SECRET",
      {:scope => 'email, offline_access', :client_options => {:ssl => {:ca_file => '/usr/lib/ssl/certs/ca-certificates.crt'}}}
end
