import prisma from "../config/prisma.js";
const getMe = async (req, res) => {
    const user = await prisma.user.findUnique({
        where: {
            id: req.userId
        },
        select: {
            id: true,
            email: true,
            username: true,
            createdAt: true,
            updatedAt: true
        }
    });
    if (!user) {
        res.status(404).json({
            message: "User not found",
            sucess: false
        });
        return;
    }
    res.status(200).json({
        success: true,
        data: {
            user
        }
    });
};
export { getMe };
//# sourceMappingURL=user.js.map