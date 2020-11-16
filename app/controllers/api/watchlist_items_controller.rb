class Api::WatchlistItemsController < ApplicationController
  before_action :require_logged_in

  def show
    @watchlist_item = WatchlistItem.find(params[:id])
    render "api/watchlist_items/show"
  end

  def create
    @watchlist_item = WatchlistItem.create!(item_params)
    render "api/watchlist_items/show"
  end

  def destroy
    @watchlist_item = WatchlistItem.find(params[:id])
    @watchlist_item.destroy
  end

  private

  def item_params
    params.require(:watchlist_item).permit(:stock_id, :user_id, :name, :symbol)
  end

end
