import Listing from "../models/listing.model.js";
import { errorHandler } from "../utils/error.js";

// Function to create listing
export const createListing = async (req, res, next) => {
  try {
    const listing = await Listing.create(req.body);
    return res.status(200).json(listing);
  } catch (error) {
    next(errorHandler(404, "Error Creating Listing!"));
  }
};

// Function to delete listing
export const deleteListing = async (req, res, next) => {
  const listing = await Listing.findById(req.params.id);
  if (!listing) {
    return next(errorHandler(404, "Listing not found!"));
  }
  if (req.user.id !== listing.userRef) {
    return next(errorHandler(401, "You can only delete your own listings!"));
  }
  try {
    await Listing.findByIdAndDelete(listing);
    res.status(200).json("Listing has been deleted.");
  } catch (error) {}
};

// Function to update listing
export const updateListing = async (req, res, next) => {
  const listing = await Listing.findById(req.params.id);
  if (!listing) {
    return next(errorHandler(401, "You can only update your own listing!"));
  }

  try {
    const updatedListing = await Listing.findByIdAndUpdate(
      req.params.id,
      req.body,
      // By default, findOneAndUpdate() returns the document as it was before update was applied. If you set new: true, findOneAndUpdate() will instead give you the object after update was applied.
      { new: true }
    );
    res.status(200).json(updatedListing);
  } catch (error) {
    next(error);
  }
};

// Function to get a specific listing
export const getListing = async (req, res, next) => {
  try {
    const listing = await Listing.findById(req.params.id);
    if (!listing) {
      return next(errorHandler(404, "Listing not found!"));
    }
    res.status(200).json(listing);
  } catch (error) {
    next(error);
  }
};

export const getListings = async (req, res, next) => {
  try {
    const limit = parseInt(req.query.limit) || 10;
    const startIndex = parseInt(req.query.startIndex);
    let offer = req.query.offer;

    if (offer === undefined || offer === "false") {
      offer = { $in: [false, true] };
    }

    let furnished = req.query.furnished;
    if (furnished === undefined || furnished === "false") {
      furnished = { $in: [false, true] };
    }

    let parking = req.query.parking;
    if (parking === undefined || parking === "false") {
      parking = { $in: [false, true] };
    }

    let type = req.query.type;
    if (type === undefined || type === "all") {
      type = { $in: ["sale", "rent"] };
    }

    const searchTerm = req.query.searchTerm || "";

    const sort = req.query.sort || "createdAt";

    const order = req.query.order || "desc";

    const listings = await Listing.find({
      name: { $regex: searchTerm, $options: "i" },
      offer,
      furnished,
      parking,
      type,
    })
      .sort({ [sort]: order })
      .limit(limit)
      .skip(startIndex);

    return res.status(200).json(listings);
  } catch (error) {}
};
