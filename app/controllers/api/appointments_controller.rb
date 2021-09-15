class Api::AppointmentsController < ApplicationController
  before_action :set_appointment, only: [:show,:destroy,:update]

  def index
    render json: Appointment.all_plus_more
  end

  def show
    render json: @appoint
  end

  def create
  end

  def update
  end

  def destroy
    @appoint.destroy
    render json: @appoint
  end

  private 
  def set_appointment
    @appoint = Appointment.find(params[:id])
  end
  def appoint_params
    params.require(:appointment).permit(:desc, :date, :appoint_id, :doctor_id)
  end
end
