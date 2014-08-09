class JobsController < ApplicationController
  before_action :authenticate_user!, except: [:index, :show]
  before_action :set_job, only: [:show, :edit, :update, :destroy]


  # GET /jobs
  # GET /jobs.json
  def index
    @jobs = Job.all
    @jobs_by_date = @jobs.group_by(&:applied_date)
    @date = params[:date] ? Date.parse(params[:date]) : Date.today
  end

  def list
    @jobs = Job.all
  end

  # GET /jobs/1
  # GET /jobs/1.json
  def show

  end

  # GET /jobs/new
  def new
    @job = Job.new
  end

  # GET /jobs/1/edit
  def edit
  end

  # POST /jobs
  # POST /jobs.json
  def create
    @job = Job.new(job_params)
    @jobs = Job.all
    @date = params[:date] ? Date.parse(params[:date]) : Date.today
    @jobs_by_date = @jobs.group_by(&:applied_date)
    respond_to do |format|
      if @job.save
        current_user.jobs << @job
        format.html { redirect_to @job, notice: 'Job was successfully created.' }
        format.js
      else
        format.html { render :new }
        format.json { render json: @job.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /jobs/1
  # PATCH/PUT /jobs/1.json
  def update
    respond_to do |format|
      if @job.update(job_params)
        format.html { redirect_to @job, notice: 'Job was successfully updated.' }
        format.json { render :show, status: :ok, location: @job }
        format.js
      else
        format.html { render :edit }
        format.json { render json: @job.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /jobs/1
  # DELETE /jobs/1.json
  def destroy
    @job.destroy
    respond_to do |format|
      format.html { redirect_to jobs_url, notice: 'Job was successfully destroyed.' }
      format.js {render :layout => false}
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_job
      @job = Job.find(params[:id])
    end

    def user_id
    @user = User.find(job.user_id)
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def job_params
      params.require(:job).permit(:company_name, :job_title, :applied_date, :follow_up_date, :contact_name, :contact_phone, :notes, :additional_contacts, :user_id, :job_id)
    end
end
